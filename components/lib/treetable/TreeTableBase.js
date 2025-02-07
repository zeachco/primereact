import { FilterMatchMode } from '../api/Api';
import { ObjectUtils } from '../utils/Utils';

export const TreeTableBase = {
    defaultProps: {
        __TYPE: 'TreeTable',
        alwaysShowPaginator: true,
        checkboxIcon: null,
        className: null,
        columnResizeMode: 'fit',
        contextMenuSelectionKey: null,
        currentPageReportTemplate: '({currentPage} of {totalPages})',
        defaultSortOrder: 1,
        emptyMessage: null,
        expandedKeys: null,
        filterDelay: 300,
        filterLocale: undefined,
        filterMode: 'lenient',
        filters: null,
        first: null,
        footer: null,
        footerColumnGroup: null,
        frozenFooterColumnGroup: null,
        frozenHeaderColumnGroup: null,
        frozenWidth: null,
        globalFilter: null,
        globalFilterMatchMode: FilterMatchMode.CONTAINS,
        header: null,
        headerColumnGroup: null,
        id: null,
        lazy: false,
        loading: false,
        loadingIcon: null,
        metaKeySelection: true,
        multiSortMeta: null,
        onColReorder: null,
        onCollapse: null,
        onColumnResizeEnd: null,
        onContextMenu: null,
        onContextMenuSelectionChange: null,
        onExpand: null,
        onFilter: null,
        onPage: null,
        onRowClick: null,
        onSelect: null,
        onSelectionChange: null,
        onSort: null,
        onToggle: null,
        onUnselect: null,
        pageLinkSize: 5,
        paginator: false,
        paginatorClassName: null,
        paginatorDropdownAppendTo: null,
        paginatorLeft: null,
        paginatorPosition: 'bottom',
        paginatorRight: null,
        paginatorTemplate: 'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown',
        propagateSelectionDown: true,
        propagateSelectionUp: true,
        removableSort: false,
        reorderableColumns: false,
        reorderIndicatorDownIcon: null,
        reorderIndicatorUpIcon: null,
        resizableColumns: false,
        rowClassName: null,
        rowHover: false,
        rows: null,
        rowsPerPageOptions: null,
        scrollHeight: null,
        scrollable: false,
        selectOnEdit: true,
        selectionKeys: null,
        selectionMode: null,
        showGridlines: false,
        sortField: null,
        sortMode: 'single',
        sortIcon: null,
        sortOrder: null,
        stripedRows: false,
        style: null,
        tabIndex: 0,
        tableClassName: null,
        tableStyle: null,
        totalRecords: null,
        value: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, TreeTableBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, TreeTableBase.defaultProps)
};
