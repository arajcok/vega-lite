"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var chai_1 = require("chai");
var util_1 = require("./util");
var hits = {
    zoom: [9, 23],
    bins: [8, 2]
};
function zoom(key, idx, zoom, parent, targetBrush) {
    var delta = zoom === 'out' ? 200 : -200;
    return "return zoom(" + hits[key][idx] + ", " + delta + ", " + parent + ", " + targetBrush + ")";
}
var cmp = function (a, b) { return a - b; };
[util_1.bound, util_1.unbound].forEach(function (bind) {
    describe("Zoom " + bind + " interval selections at runtime", function () {
        var type = 'interval';
        var embed = util_1.embedFn(browser);
        var testRender = util_1.testRenderFn(browser, "interval/zoom/" + bind);
        var binding = bind === util_1.bound ? { bind: 'scales' } : {};
        var assertExtent = {
            in: ['isAtLeast', 'isAtMost'], out: ['isAtMost', 'isAtLeast']
        };
        function setup(brushKey, idx, encodings, parent) {
            var inOut = idx % 2 ? 'out' : 'in';
            var xold;
            var yold;
            if (bind === util_1.unbound) {
                var drag = browser.execute(util_1.brush(brushKey, idx, parent)).value[0];
                xold = drag.intervals[0].extent.sort(cmp);
                yold = encodings.indexOf('y') >= 0 ? drag.intervals[encodings.indexOf('x') + 1].extent.sort(cmp) : null;
            }
            else {
                xold = JSON.parse(browser.execute('return JSON.stringify(view._runtime.scales.x.value.domain())').value);
                yold = browser.execute('return view._runtime.scales.y.value.domain()').value;
            }
            return { inOut: inOut, xold: xold, yold: yold };
        }
        it('should zoom in and out', function () {
            for (var i = 0; i < hits.zoom.length; i++) {
                embed(util_1.spec('unit', i, tslib_1.__assign({ type: type }, binding)));
                var _a = setup('drag', i, ['x', 'y']), inOut = _a.inOut, xold = _a.xold, yold = _a.yold;
                testRender(inOut + "-0");
                var zoomed = browser.execute(zoom('zoom', i, inOut, null, bind === util_1.unbound)).value[0];
                var xnew = zoomed.intervals[0].extent.sort(cmp);
                var ynew = zoomed.intervals[1].extent.sort(cmp);
                testRender(inOut + "-1");
                chai_1.assert[assertExtent[inOut][0]](xnew[0], xold[0]);
                chai_1.assert[assertExtent[inOut][1]](xnew[1], xold[1]);
                chai_1.assert[assertExtent[inOut][0]](ynew[0], yold[0]);
                chai_1.assert[assertExtent[inOut][1]](ynew[1], yold[1]);
            }
        });
        it('should work with binned domains', function () {
            for (var i = 0; i < hits.bins.length; i++) {
                var encodings = ['y'];
                embed(util_1.spec('unit', 1, tslib_1.__assign({ type: type }, binding, { encodings: encodings }), {
                    x: { aggregate: 'count', field: '*', type: 'quantitative' },
                    y: { bin: true },
                    color: { value: 'steelblue', field: null, type: null }
                }));
                var _a = setup('bins', i, encodings), inOut = _a.inOut, yold = _a.yold;
                testRender("bins_" + inOut + "-0");
                var zoomed = browser.execute(zoom('bins', i, inOut, null, bind === util_1.unbound)).value[0];
                var ynew = zoomed.intervals[0].extent.sort(cmp);
                chai_1.assert[assertExtent[inOut][0]](ynew[0], yold[0]);
                chai_1.assert[assertExtent[inOut][1]](ynew[1], yold[1]);
                testRender("bins_" + inOut + "-1");
            }
        });
        it('should work with temporal domains', function () {
            var values = util_1.tuples.map(function (d) { return (tslib_1.__assign({}, d, { a: new Date(2017, d.a) })); });
            var encodings = ['x'];
            for (var i = 0; i < hits.zoom.length; i++) {
                embed(util_1.spec('unit', i, tslib_1.__assign({ type: type }, binding, { encodings: encodings }), { values: values, x: { type: 'temporal' } }));
                var _a = setup('drag', i, encodings), inOut = _a.inOut, xold = _a.xold;
                testRender("temporal_" + inOut + "-0");
                var zoomed = browser.execute(zoom('zoom', i, inOut, null, bind === util_1.unbound)).value[0];
                var xnew = zoomed.intervals[0].extent.sort(cmp);
                chai_1.assert[assertExtent[inOut][0]](+xnew[0], +(new Date(xold[0])));
                chai_1.assert[assertExtent[inOut][1]](+xnew[1], +(new Date(xold[1])));
                testRender("temporal_" + inOut + "-1");
            }
        });
        it('should work with log/pow scales', function () {
            for (var i = 0; i < hits.zoom.length; i++) {
                embed(util_1.spec('unit', i, tslib_1.__assign({ type: type }, binding), {
                    x: { scale: { type: 'pow', exponent: 1.5 } },
                    y: { scale: { type: 'log' } }
                }));
                var _a = setup('drag', i, ['x', 'y']), inOut = _a.inOut, xold = _a.xold, yold = _a.yold;
                testRender("logpow_" + inOut + "-0");
                var zoomed = browser.execute(zoom('zoom', i, inOut, null, bind === util_1.unbound)).value[0];
                var xnew = zoomed.intervals[0].extent.sort(cmp);
                var ynew = zoomed.intervals[1].extent.sort(cmp);
                chai_1.assert[assertExtent[inOut][0]](xnew[0], xold[0]);
                chai_1.assert[assertExtent[inOut][1]](xnew[1], xold[1]);
                chai_1.assert[assertExtent[inOut][0]](ynew[0], yold[0]);
                chai_1.assert[assertExtent[inOut][1]](ynew[1], yold[1]);
                testRender("logpow_" + inOut + "-1");
            }
        });
        if (bind === util_1.unbound) {
            it('should work with ordinal/nominal domains', function () {
                for (var i = 0; i < hits.zoom.length; i++) {
                    embed(util_1.spec('unit', i, tslib_1.__assign({ type: type }, binding), {
                        x: { type: 'ordinal' }, y: { type: 'nominal' }
                    }));
                    var _a = setup('drag', i, ['x', 'y']), inOut = _a.inOut, xold = _a.xold, yold = _a.yold;
                    testRender("ord_" + inOut + "-0");
                    var zoomed = browser.execute(zoom('zoom', i, inOut, null, bind === util_1.unbound)).value[0];
                    var xnew = zoomed.intervals[0].extent.sort(cmp);
                    var ynew = zoomed.intervals[1].extent.sort(cmp);
                    if (inOut === 'in') {
                        chai_1.assert.isAtMost(xnew.length, xold.length);
                        chai_1.assert.isAtMost(ynew.length, yold.length);
                    }
                    else {
                        chai_1.assert.isAtLeast(xnew.length, xold.length);
                        chai_1.assert.isAtLeast(ynew.length, yold.length);
                    }
                    testRender("ord_" + inOut + "-1");
                }
            });
        }
        else {
            util_1.compositeTypes.forEach(function (specType) {
                it("should work with shared scales in " + specType + " views", function () {
                    for (var i = 0; i < hits.bins.length; i++) {
                        embed(util_1.spec(specType, 0, tslib_1.__assign({ type: type }, binding), { resolve: { scale: { x: 'shared', y: 'shared' } } }));
                        var parent_1 = util_1.parentSelector(specType, i);
                        var _a = setup(specType, i, ['x', 'y'], parent_1), inOut = _a.inOut, xold = _a.xold, yold = _a.yold;
                        var zoomed = browser.execute(zoom('bins', i, inOut, null, bind === util_1.unbound)).value[0];
                        var xnew = zoomed.intervals[0].extent.sort(cmp);
                        var ynew = zoomed.intervals[1].extent.sort(cmp);
                        chai_1.assert[assertExtent[inOut][0]](xnew[0], xold[0]);
                        chai_1.assert[assertExtent[inOut][1]](xnew[1], xold[1]);
                        chai_1.assert[assertExtent[inOut][0]](ynew[0], yold[0]);
                        chai_1.assert[assertExtent[inOut][1]](ynew[1], yold[1]);
                        testRender(specType + "_" + inOut);
                    }
                });
            });
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdC1ydW50aW1lL3pvb20udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBNEI7QUFDNUIsK0JBVWdCO0FBRWhCLElBQU0sSUFBSSxHQUFHO0lBQ1gsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNiLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDYixDQUFDO0FBSUYsY0FBYyxHQUFXLEVBQUUsR0FBVyxFQUFFLElBQVcsRUFBRSxNQUFlLEVBQUUsV0FBcUI7SUFDekYsSUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUMxQyxNQUFNLENBQUMsaUJBQWUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFLLEtBQUssVUFBSyxNQUFNLFVBQUssV0FBVyxNQUFHLENBQUM7QUFDL0UsQ0FBQztBQUVELElBQU0sR0FBRyxHQUFHLFVBQUMsQ0FBUyxFQUFFLENBQVMsSUFBSyxPQUFBLENBQUMsR0FBRyxDQUFDLEVBQUwsQ0FBSyxDQUFDO0FBRTVDLENBQUMsWUFBSyxFQUFFLGNBQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFTLElBQUk7SUFDcEMsUUFBUSxDQUFDLFVBQVEsSUFBSSxvQ0FBaUMsRUFBRTtRQUN0RCxJQUFNLElBQUksR0FBRyxVQUFVLENBQUM7UUFDeEIsSUFBTSxLQUFLLEdBQUcsY0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLElBQU0sVUFBVSxHQUFHLG1CQUFZLENBQUMsT0FBTyxFQUFFLG1CQUFpQixJQUFNLENBQUMsQ0FBQztRQUNsRSxJQUFNLE9BQU8sR0FBRyxJQUFJLEtBQUssWUFBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMs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QUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDakQsYUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDakQsYUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDakQsVUFBVSxDQUFJLFFBQVEsU0FBSSxLQUFPLENBQUMsQ0FBQztvQkFDckMsQ0FBQztnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==