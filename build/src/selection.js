export var SELECTION_ID = '_vgsid_';
export var defaultConfig = {
    single: {
        on: 'click',
        fields: [SELECTION_ID],
        resolve: 'global',
        empty: 'all'
    },
    multi: {
        on: 'click',
        fields: [SELECTION_ID],
        toggle: 'event.shiftKey',
        resolve: 'global',
        empty: 'all'
    },
    interval: {
        on: '[mousedown, window:mouseup] > window:mousemove!',
        encodings: ['x', 'y'],
        translate: '[mousedown, window:mouseup] > window:mousemove!',
        zoom: 'wheel!',
        mark: { fill: '#333', fillOpacity: 0.125, stroke: 'white' },
        resolve: 'global'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLENBQUMsSUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDO0FBMk10QyxNQUFNLENBQUMsSUFBTSxhQUFhLEdBQW1CO0lBQzNDLE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxPQUFPO1FBQ1gsTUFBTSxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3RCLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLEtBQUssRUFBRSxLQUFLO0tBQ2I7SUFDRCxLQUFLLEVBQUU7UUFDTCxFQUFFLEVBQUUsT0FBTztRQUNYLE1BQU0sRUFBRSxDQUFDLFlBQVksQ0FBQztRQUN0QixNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLEtBQUssRUFBRSxLQUFLO0tBQ2I7SUFDRCxRQUFRLEVBQUU7UUFDUixFQUFFLEVBQUUsaURBQWlEO1FBQ3JELFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7UUFDckIsU0FBUyxFQUFFLGlEQUFpRDtRQUM1RCxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFDO1FBQ3pELE9BQU8sRUFBRSxRQUFRO0tBQ2xCO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2luZ2xlRGVmQ2hhbm5lbH0gZnJvbSAnLi9jaGFubmVsJztcbmltcG9ydCB7VmdCaW5kaW5nLCBWZ0V2ZW50U3RyZWFtfSBmcm9tICcuL3ZlZ2Euc2NoZW1hJztcblxuZXhwb3J0IGNvbnN0IFNFTEVDVElPTl9JRCA9ICdfdmdzaWRfJztcbmV4cG9ydCB0eXBlIFNlbGVjdGlvblR5cGUgPSAnc2luZ2xlJyB8ICdtdWx0aScgfCAnaW50ZXJ2YWwnO1xuZXhwb3J0IHR5cGUgU2VsZWN0aW9uUmVzb2x1dGlvbiA9ICdnbG9iYWwnIHwgJ3VuaW9uJyB8ICdpbnRlcnNlY3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VTZWxlY3Rpb25EZWYge1xuICAvKipcbiAgICogQSBbVmVnYSBldmVudCBzdHJlYW1dKGh0dHBzOi8vdmVnYS5naXRodWIuaW8vdmVnYS9kb2NzL2V2ZW50LXN0cmVhbXMvKSAob2JqZWN0IG9yIHNlbGVjdG9yKSB0aGF0IHRyaWdnZXJzIHRoZSBzZWxlY3Rpb24uXG4gICAqIEZvciBpbnRlcnZhbCBzZWxlY3Rpb25zLCB0aGUgZXZlbnQgc3RyZWFtIG11c3Qgc3BlY2lmeSBhIFtzdGFydCBhbmQgZW5kXShodHRwczovL3ZlZ2EuZ2l0aHViLmlvL3ZlZ2EvZG9jcy9ldmVudC1zdHJlYW1zLyNiZXR3ZWVuLWZpbHRlcnMpLlxuICAgKi9cbiAgb24/OiBWZ0V2ZW50U3RyZWFtO1xuICAvKipcbiAgICogV2l0aCBsYXllcmVkIGFuZCBtdWx0aS12aWV3IGRpc3BsYXlzLCBhIHN0cmF0ZWd5IHRoYXQgZGV0ZXJtaW5lcyBob3dcbiAgICogc2VsZWN0aW9ucycgZGF0YSBxdWVyaWVzIGFyZSByZXNvbHZlZCB3aGVuIGFwcGxpZWQgaW4gYSBmaWx0ZXIgdHJhbnNmb3JtLFxuICAgKiBjb25kaXRpb25hbCBlbmNvZGluZyBydWxlLCBvciBzY2FsZSBkb21haW4uXG4gICAqXG4gICAqL1xuICByZXNvbHZlPzogU2VsZWN0aW9uUmVzb2x1dGlvbjtcblxuICAvLyBUT0RPKGh0dHBzOi8vZ2l0aHViLmNvbS92ZWdhL3ZlZ2EtbGl0ZS9pc3N1ZXMvMjU5NikuXG4gIC8vIHByZWRpY2F0ZT86IHN0cmluZztcbiAgLy8gZG9tYWluPzogU2VsZWN0aW9uRG9tYWluO1xuXG4gIC8vIFRyYW5zZm9ybXNcblxuICAvKipcbiAgICogQW4gYXJyYXkgb2YgZW5jb2RpbmcgY2hhbm5lbHMuIFRoZSBjb3JyZXNwb25kaW5nIGRhdGEgZmllbGQgdmFsdWVzXG4gICAqIG11c3QgbWF0Y2ggZm9yIGEgZGF0YSB0dXBsZSB0byBmYWxsIHdpdGhpbiB0aGUgc2VsZWN0aW9uLlxuICAgKi9cbiAgZW5jb2RpbmdzPzogU2luZ2xlRGVmQ2hhbm5lbFtdO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBmaWVsZCBuYW1lcyB3aG9zZSB2YWx1ZXMgbXVzdCBtYXRjaCBmb3IgYSBkYXRhIHR1cGxlIHRvXG4gICAqIGZhbGwgd2l0aGluIHRoZSBzZWxlY3Rpb24uXG4gICAqL1xuICBmaWVsZHM/OiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCwgYWxsIGRhdGEgdmFsdWVzIGFyZSBjb25zaWRlcmVkIHRvIGxpZSB3aXRoaW4gYW4gZW1wdHkgc2VsZWN0aW9uLlxuICAgKiBXaGVuIHNldCB0byBgbm9uZWAsIGVtcHR5IHNlbGVjdGlvbnMgY29udGFpbiBubyBkYXRhIHZhbHVlcy5cbiAgICovXG4gIGVtcHR5PzogJ2FsbCcgfCAnbm9uZSc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2xlU2VsZWN0aW9uQ29uZmlnIGV4dGVuZHMgQmFzZVNlbGVjdGlvbkRlZiB7XG4gIC8qKlxuICAgKiBFc3RhYmxpc2ggYSB0d28td2F5IGJpbmRpbmcgYmV0d2VlbiBhIHNpbmdsZSBzZWxlY3Rpb24gYW5kIGlucHV0IGVsZW1lbnRzXG4gICAqIChhbHNvIGtub3duIGFzIGR5bmFtaWMgcXVlcnkgd2lkZ2V0cykuIEEgYmluZGluZyB0YWtlcyB0aGUgZm9ybSBvZlxuICAgKiBWZWdhJ3MgW2lucHV0IGVsZW1lbnQgYmluZGluZyBkZWZpbml0aW9uXShodHRwczovL3ZlZ2EuZ2l0aHViLmlvL3ZlZ2EvZG9jcy9zaWduYWxzLyNiaW5kKVxuICAgKiBvciBjYW4gYmUgYSBtYXBwaW5nIGJldHdlZW4gcHJvamVjdGVkIGZpZWxkL2VuY29kaW5ncyBhbmQgYmluZGluZyBkZWZpbml0aW9ucy5cbiAgICpcbiAgICogU2VlIHRoZSBbYmluZCB0cmFuc2Zvcm1dKGh0dHBzOi8vdmVnYS5naXRodWIuaW8vdmVnYS1saXRlL2RvY3MvYmluZC5odG1sKSBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgYmluZD86IFZnQmluZGluZyB8IHtba2V5OiBzdHJpbmddOiBWZ0JpbmRpbmd9O1xuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIGFuIGludmlzaWJsZSB2b3Jvbm9pIGRpYWdyYW0gaXMgY29tcHV0ZWQgdG8gYWNjZWxlcmF0ZSBkaXNjcmV0ZVxuICAgKiBzZWxlY3Rpb24uIFRoZSBkYXRhIHZhbHVlIF9uZWFyZXN0XyB0aGUgbW91c2UgY3Vyc29yIGlzIGFkZGVkIHRvIHRoZSBzZWxlY3Rpb24uXG4gICAqXG4gICAqIFNlZSB0aGUgW25lYXJlc3QgdHJhbnNmb3JtXShodHRwczovL3ZlZ2EuZ2l0aHViLmlvL3ZlZ2EtbGl0ZS9kb2NzL25lYXJlc3QuaHRtbCkgZG9jdW1lbnRhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICovXG4gIG5lYXJlc3Q/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpU2VsZWN0aW9uQ29uZmlnIGV4dGVuZHMgQmFzZVNlbGVjdGlvbkRlZiB7XG4gIC8qKlxuICAgKiBDb250cm9scyB3aGV0aGVyIGRhdGEgdmFsdWVzIHNob3VsZCBiZSB0b2dnbGVkIG9yIG9ubHkgZXZlciBpbnNlcnRlZCBpbnRvXG4gICAqIG11bHRpIHNlbGVjdGlvbnMuIENhbiBiZSBgdHJ1ZWAsIGBmYWxzZWAgKGZvciBpbnNlcnRpb24gb25seSksIG9yIGFcbiAgICogW1ZlZ2EgZXhwcmVzc2lvbl0oaHR0cHM6Ly92ZWdhLmdpdGh1Yi5pby92ZWdhL2RvY3MvZXhwcmVzc2lvbnMvKS5cbiAgICpcbiAgICogX19EZWZhdWx0IHZhbHVlOl9fIGB0cnVlYCwgd2hpY2ggY29ycmVzcG9uZHMgdG8gYGV2ZW50LnNoaWZ0S2V5YCAoaS5lLixcbiAgICogZGF0YSB2YWx1ZXMgYXJlIHRvZ2dsZWQgd2hlbiBhIHVzZXIgaW50ZXJhY3RzIHdpdGggdGhlIHNoaWZ0LWtleSBwcmVzc2VkKS5cbiAgICpcbiAgICogU2VlIHRoZSBbdG9nZ2xlIHRyYW5zZm9ybV0oaHR0cHM6Ly92ZWdhLmdpdGh1Yi5pby92ZWdhLWxpdGUvZG9jcy90b2dnbGUuaHRtbCkgZG9jdW1lbnRhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICovXG4gIHRvZ2dsZT86IHN0cmluZyB8IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgYW4gaW52aXNpYmxlIHZvcm9ub2kgZGlhZ3JhbSBpcyBjb21wdXRlZCB0byBhY2NlbGVyYXRlIGRpc2NyZXRlXG4gICAqIHNlbGVjdGlvbi4gVGhlIGRhdGEgdmFsdWUgX25lYXJlc3RfIHRoZSBtb3VzZSBjdXJzb3IgaXMgYWRkZWQgdG8gdGhlIHNlbGVjdGlvbi5cbiAgICpcbiAgICogU2VlIHRoZSBbbmVhcmVzdCB0cmFuc2Zvcm1dKGh0dHBzOi8vdmVnYS5naXRodWIuaW8vdmVnYS1saXRlL2RvY3MvbmVhcmVzdC5odG1sKSBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgbmVhcmVzdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJ1c2hDb25maWcge1xuICAvKipcbiAgICogVGhlIGZpbGwgY29sb3Igb2YgdGhlIGludGVydmFsIG1hcmsuXG4gICAqXG4gICAqIF9fRGVmYXVsdCB2YWx1ZTpfXyBgIzMzMzMzM2BcbiAgICpcbiAgICovXG4gIGZpbGw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZmlsbCBvcGFjaXR5IG9mIHRoZSBpbnRlcnZhbCBtYXJrIChhIHZhbHVlIGJldHdlZW4gMCBhbmQgMSkuXG4gICAqXG4gICAqIF9fRGVmYXVsdCB2YWx1ZTpfXyBgMC4xMjVgXG4gICAqL1xuICBmaWxsT3BhY2l0eT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBzdHJva2UgY29sb3Igb2YgdGhlIGludGVydmFsIG1hcmsuXG4gICAqXG4gICAqIF9fRGVmYXVsdCB2YWx1ZTpfXyBgI2ZmZmZmZmBcbiAgICovXG4gIHN0cm9rZT86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBzdHJva2Ugb3BhY2l0eSBvZiB0aGUgaW50ZXJ2YWwgbWFyayAoYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEpLlxuICAgKi9cbiAgc3Ryb2tlT3BhY2l0eT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBzdHJva2Ugd2lkdGggb2YgdGhlIGludGVydmFsIG1hcmsuXG4gICAqL1xuICBzdHJva2VXaWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGFsdGVybmF0aW5nIHN0cm9rZSBhbmQgc3BhY2UgbGVuZ3RocyxcbiAgICogZm9yIGNyZWF0aW5nIGRhc2hlZCBvciBkb3R0ZWQgbGluZXMuXG4gICAqL1xuICBzdHJva2VEYXNoPzogbnVtYmVyW107XG4gIC8qKlxuICAgKiBUaGUgb2Zmc2V0IChpbiBwaXhlbHMpIHdpdGggd2hpY2ggdG8gYmVnaW4gZHJhd2luZyB0aGUgc3Ryb2tlIGRhc2ggYXJyYXkuXG4gICAqL1xuICBzdHJva2VEYXNoT2Zmc2V0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEludGVydmFsU2VsZWN0aW9uQ29uZmlnIGV4dGVuZHMgQmFzZVNlbGVjdGlvbkRlZiB7XG4gIC8qKlxuICAgKiBXaGVuIHRydXRoeSwgYWxsb3dzIGEgdXNlciB0byBpbnRlcmFjdGl2ZWx5IG1vdmUgYW4gaW50ZXJ2YWwgc2VsZWN0aW9uXG4gICAqIGJhY2stYW5kLWZvcnRoLiBDYW4gYmUgYHRydWVgLCBgZmFsc2VgICh0byBkaXNhYmxlIHBhbm5pbmcpLCBvciBhXG4gICAqIFtWZWdhIGV2ZW50IHN0cmVhbSBkZWZpbml0aW9uXShodHRwczovL3ZlZ2EuZ2l0aHViLmlvL3ZlZ2EvZG9jcy9ldmVudC1zdHJlYW1zLylcbiAgICogd2hpY2ggbXVzdCBpbmNsdWRlIGEgc3RhcnQgYW5kIGVuZCBldmVudCB0byB0cmlnZ2VyIGNvbnRpbnVvdXMgcGFubmluZy5cbiAgICpcbiAgICogX19EZWZhdWx0IHZhbHVlOl9fIGB0cnVlYCwgd2hpY2ggY29ycmVzcG9uZHMgdG9cbiAgICogYFttb3VzZWRvd24sIHdpbmRvdzptb3VzZXVwXSA+IHdpbmRvdzptb3VzZW1vdmUhYCB3aGljaCBjb3JyZXNwb25kcyB0b1xuICAgKiBjbGlja3MgYW5kIGRyYWdnaW5nIHdpdGhpbiBhbiBpbnRlcnZhbCBzZWxlY3Rpb24gdG8gcmVwb3NpdGlvbiBpdC5cbiAgICovXG4gIHRyYW5zbGF0ZT86IHN0cmluZyB8IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1dGh5LCBhbGxvd3MgYSB1c2VyIHRvIGludGVyYWN0aXZlbHkgcmVzaXplIGFuIGludGVydmFsIHNlbGVjdGlvbi5cbiAgICogQ2FuIGJlIGB0cnVlYCwgYGZhbHNlYCAodG8gZGlzYWJsZSB6b29taW5nKSwgb3IgYSBbVmVnYSBldmVudCBzdHJlYW1cbiAgICogZGVmaW5pdGlvbl0oaHR0cHM6Ly92ZWdhLmdpdGh1Yi5pby92ZWdhL2RvY3MvZXZlbnQtc3RyZWFtcy8pLiBDdXJyZW50bHksXG4gICAqIG9ubHkgYHdoZWVsYCBldmVudHMgYXJlIHN1cHBvcnRlZC5cbiAgICpcbiAgICpcbiAgICogX19EZWZhdWx0IHZhbHVlOl9fIGB0cnVlYCwgd2hpY2ggY29ycmVzcG9uZHMgdG8gYHdoZWVsIWAuXG4gICAqL1xuICB6b29tPzogc3RyaW5nIHwgYm9vbGVhbjtcblxuICAvKipcbiAgICogRXN0YWJsaXNoZXMgYSB0d28td2F5IGJpbmRpbmcgYmV0d2VlbiB0aGUgaW50ZXJ2YWwgc2VsZWN0aW9uIGFuZCB0aGUgc2NhbGVzXG4gICAqIHVzZWQgd2l0aGluIHRoZSBzYW1lIHZpZXcuIFRoaXMgYWxsb3dzIGEgdXNlciB0byBpbnRlcmFjdGl2ZWx5IHBhbiBhbmRcbiAgICogem9vbSB0aGUgdmlldy5cbiAgICovXG4gIGJpbmQ/OiAnc2NhbGVzJztcblxuICAvKipcbiAgICogQW4gaW50ZXJ2YWwgc2VsZWN0aW9uIGFsc28gYWRkcyBhIHJlY3RhbmdsZSBtYXJrIHRvIGRlcGljdCB0aGVcbiAgICogZXh0ZW50cyBvZiB0aGUgaW50ZXJ2YWwuIFRoZSBgbWFya2AgcHJvcGVydHkgY2FuIGJlIHVzZWQgdG8gY3VzdG9taXplIHRoZVxuICAgKiBhcHBlYXJhbmNlIG9mIHRoZSBtYXJrLlxuICAgKi9cbiAgbWFyaz86IEJydXNoQ29uZmlnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdsZVNlbGVjdGlvbiBleHRlbmRzIFNpbmdsZVNlbGVjdGlvbkNvbmZpZyB7XG4gIHR5cGU6ICdzaW5nbGUnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE11bHRpU2VsZWN0aW9uIGV4dGVuZHMgTXVsdGlTZWxlY3Rpb25Db25maWcge1xuICB0eXBlOiAnbXVsdGknO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEludGVydmFsU2VsZWN0aW9uIGV4dGVuZHMgSW50ZXJ2YWxTZWxlY3Rpb25Db25maWcge1xuICB0eXBlOiAnaW50ZXJ2YWwnO1xufVxuXG5leHBvcnQgdHlwZSBTZWxlY3Rpb25EZWYgPSBTaW5nbGVTZWxlY3Rpb24gfCBNdWx0aVNlbGVjdGlvbiB8IEludGVydmFsU2VsZWN0aW9uO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdGlvbkNvbmZpZyB7XG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBkZWZpbml0aW9uIGZvciBhIFtgc2luZ2xlYF0oaHR0cHM6Ly92ZWdhLmdpdGh1Yi5pby92ZWdhLWxpdGUvZG9jcy9zZWxlY3Rpb24uaHRtbCN0eXBlKSBzZWxlY3Rpb24uIEFsbCBwcm9wZXJ0aWVzIGFuZCB0cmFuc2Zvcm1hdGlvbnNcbiAgICogIGZvciBhIHNpbmdsZSBzZWxlY3Rpb24gZGVmaW5pdGlvbiAoZXhjZXB0IGB0eXBlYCkgbWF5IGJlIHNwZWNpZmllZCBoZXJlLlxuICAgKlxuICAgKiBGb3IgaW5zdGFuY2UsIHNldHRpbmcgYHNpbmdsZWAgdG8gYHtcIm9uXCI6IFwiZGJsY2xpY2tcIn1gIHBvcHVsYXRlcyBzaW5nbGUgc2VsZWN0aW9ucyBvbiBkb3VibGUtY2xpY2sgYnkgZGVmYXVsdC5cbiAgICovXG4gIHNpbmdsZT86IFNpbmdsZVNlbGVjdGlvbkNvbmZpZztcbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGRlZmluaXRpb24gZm9yIGEgW2BtdWx0aWBdKGh0dHBzOi8vdmVnYS5naXRodWIuaW8vdmVnYS1saXRlL2RvY3Mvc2VsZWN0aW9uLmh0bWwjdHlwZSkgc2VsZWN0aW9uLiBBbGwgcHJvcGVydGllcyBhbmQgdHJhbnNmb3JtYXRpb25zXG4gICAqIGZvciBhIG11bHRpIHNlbGVjdGlvbiBkZWZpbml0aW9uIChleGNlcHQgYHR5cGVgKSBtYXkgYmUgc3BlY2lmaWVkIGhlcmUuXG4gICAqXG4gICAqIEZvciBpbnN0YW5jZSwgc2V0dGluZyBgbXVsdGlgIHRvIGB7XCJ0b2dnbGVcIjogXCJldmVudC5hbHRLZXlcIn1gIGFkZHMgYWRkaXRpb25hbCB2YWx1ZXMgdG9cbiAgICogbXVsdGkgc2VsZWN0aW9ucyB3aGVuIGNsaWNraW5nIHdpdGggdGhlIGFsdC1rZXkgcHJlc3NlZCBieSBkZWZhdWx0LlxuICAgKi9cbiAgbXVsdGk/OiBNdWx0aVNlbGVjdGlvbkNvbmZpZztcbiAgLyoqXG4gICAqIFRoZSBkZWZhdWx0IGRlZmluaXRpb24gZm9yIGFuIFtgaW50ZXJ2YWxgXShodHRwczovL3ZlZ2EuZ2l0aHViLmlvL3ZlZ2EtbGl0ZS9kb2NzL3NlbGVjdGlvbi5odG1sI3R5cGUpIHNlbGVjdGlvbi4gQWxsIHByb3BlcnRpZXMgYW5kIHRyYW5zZm9ybWF0aW9uc1xuICAgKiBmb3IgYW4gaW50ZXJ2YWwgc2VsZWN0aW9uIGRlZmluaXRpb24gKGV4Y2VwdCBgdHlwZWApIG1heSBiZSBzcGVjaWZpZWQgaGVyZS5cbiAgICpcbiAgICogRm9yIGluc3RhbmNlLCBzZXR0aW5nIGBpbnRlcnZhbGAgdG8gYHtcInRyYW5zbGF0ZVwiOiBmYWxzZX1gIGRpc2FibGVzIHRoZSBhYmlsaXR5IHRvIG1vdmVcbiAgICogaW50ZXJ2YWwgc2VsZWN0aW9ucyBieSBkZWZhdWx0LlxuICAgKi9cbiAgaW50ZXJ2YWw/OiBJbnRlcnZhbFNlbGVjdGlvbkNvbmZpZztcbn1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb25maWc6U2VsZWN0aW9uQ29uZmlnID0ge1xuICBzaW5nbGU6IHtcbiAgICBvbjogJ2NsaWNrJyxcbiAgICBmaWVsZHM6IFtTRUxFQ1RJT05fSURdLFxuICAgIHJlc29sdmU6ICdnbG9iYWwnLFxuICAgIGVtcHR5OiAnYWxsJ1xuICB9LFxuICBtdWx0aToge1xuICAgIG9uOiAnY2xpY2snLFxuICAgIGZpZWxkczogW1NFTEVDVElPTl9JRF0sXG4gICAgdG9nZ2xlOiAnZXZlbnQuc2hpZnRLZXknLFxuICAgIHJlc29sdmU6ICdnbG9iYWwnLFxuICAgIGVtcHR5OiAnYWxsJ1xuICB9LFxuICBpbnRlcnZhbDoge1xuICAgIG9uOiAnW21vdXNlZG93biwgd2luZG93Om1vdXNldXBdID4gd2luZG93Om1vdXNlbW92ZSEnLFxuICAgIGVuY29kaW5nczogWyd4JywgJ3knXSxcbiAgICB0cmFuc2xhdGU6ICdbbW91c2Vkb3duLCB3aW5kb3c6bW91c2V1cF0gPiB3aW5kb3c6bW91c2Vtb3ZlIScsXG4gICAgem9vbTogJ3doZWVsIScsXG4gICAgbWFyazoge2ZpbGw6ICcjMzMzJywgZmlsbE9wYWNpdHk6IDAuMTI1LCBzdHJva2U6ICd3aGl0ZSd9LFxuICAgIHJlc29sdmU6ICdnbG9iYWwnXG4gIH1cbn07XG4iXX0=