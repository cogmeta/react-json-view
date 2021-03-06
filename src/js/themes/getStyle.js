import {rjv_default, rjv_grey} from './base16/rjv-themes';
import constants from './styleConstants';
import {createStyling} from 'react-base16-styling';

const colorMap = theme => ({
    backgroundColor: theme.base00,
    ellipsisColor: theme.base09,
    braceColor: theme.base07,
    expandedIcon: theme.base0D,
    collapsedIcon: theme.base0E,
    keyColor: theme.base07,
    arrayKeyColor: theme.base0C,
    objectSize: theme.base04,
    copyToClipboard: theme.base0F,
    objectBorder: theme.base02,
    dataTypes: {
        boolean: theme.base0E,
        date: theme.base0D,
        float: theme.base0B,
        function: theme.base0D,
        integer: theme.base0F,
        string: theme.base09,
        nan: theme.base08,
        null: theme.base0A,
        undefined: theme.base05,
        background: theme.base02
    },
    editVariable: {
        editIcon: theme.base0E,
        cancelIcon: theme.base09,
        removeIcon: theme.base09,
        addIcon: theme.base0E,
        checkIcon: theme.base0E,
        background: theme.base01,
        color: theme.base0A,
        border: theme.base07
    },
    addKeyModal: {
        background: theme.base05,
        border: theme.base04,
        color: theme.base0A,
        labelColor: theme.base01
    }
});

const getDefaultThemeStyling = theme => {
    const colors = colorMap(theme);

    return {
        'app-container': {
            fontFamily: constants.globalFontFamily,
            cursor: constants.globalCursor,
            backgroundColor: colors.backgroundColor,
            position: 'relative'
        },
        'ellipsis': {
            display: 'inline-block',
            color: colors.ellipsisColor,
            fontSize: constants.ellipsisFontSize,
            lineHeight: constants.ellipsisLineHeight,
            cursor: constants.ellipsisCursor
        },
        'brace-row': {
            display: 'inline-block',
            cursor: 'pointer'
        },
        'brace': {
            display: 'inline-block',
            cursor: constants.braceCursor,
            fontWeight: constants.braceFontWeight,
            color: colors.braceColor,
        },
        'expanded-icon': {
            color: colors.expandedIcon
        },
        'collapsed-icon': {
            color: colors.collapsedIcon
        },
        'colon': {
            display: 'inline-block',
            margin: constants.keyMargin,
            color: colors.keyColor
        },
        objectKeyVal: (component, paddingLeft) => {
            return {style: {
                paddingLeft: paddingLeft + 'px',
                paddingTop: constants.keyValPaddingTop,
                paddingRight: constants.keyValPaddingRight,
                paddingBottom: constants.keyValPaddingBottom,
                borderLeft: constants.keyValBorderLeft
                    + ' ' + colors.objectBorder,
                ':hover': {
                    paddingLeft: (paddingLeft - 1)  + 'px',
                    borderLeft: constants.keyValBorderHover
                        + ' ' + colors.objectBorder
                }
            }};
        },
        'object-key-val-no-border': {
            padding: constants.keyValPadding
        },
        'pushed-content': {
            marginLeft: constants.pushedContentMarginLeft
        },
        'variable-value': {
            display: 'inline-block',
            paddingRight: constants.variableValuePaddingRight,
            position: 'relative'
        },
        'object-name': {
            display: 'inline-block',
            color: colors.keyColor,
            letterSpacing: constants.keyLetterSpacing,
            fontStyle: constants.keyFontStyle,
            verticalAlign: constants.keyVerticalAlign,
            opacity: constants.keyOpacity,
            ':hover': {
                opacity: constants.keyOpacityHover
            }
        },
        'array-key': {
            display: 'inline-block',
            color: colors.arrayKeyColor,
            letterSpacing: constants.keyLetterSpacing,
            fontStyle: constants.keyFontStyle,
            verticalAlign: constants.keyVerticalAlign,
            opacity: constants.keyOpacity,
            ':hover': {
                opacity: constants.keyOpacityHover
            }
        },
        'object-size': {
            color: colors.objectSize,
            borderRadius: constants.objectSizeBorderRadius,
            fontStyle: constants.objectSizeFontStyle,
            margin: constants.objectSizeMargin
        },
        'data-type-label': {
            fontSize: constants.dataTypeFontSize,
            marginRight: constants.dataTypeMarginRight,
            opacity: constants.datatypeOpacity
        },
        'boolean': {
            display: 'inline-block',
            color: colors.dataTypes.boolean
        },
        'date': {
            display: 'inline-block',
            color: colors.dataTypes.date
        },
        'date-value': {
            marginLeft: constants.dateValueMarginLeft
        },
        'float': {
            display: 'inline-block',
            color: colors.dataTypes.float
        },
        'function': {
            display: 'inline-block',
            color: colors.dataTypes['function'],
            cursor: 'pointer',
            whiteSpace: 'pre-line'
        },
        'integer': {
            display: 'inline-block',
            color: colors.dataTypes.integer
        },
        'string': {
            display: 'inline-block',
            color: colors.dataTypes.string
        },
        'nan': {
            display: 'inline-block',
            color: colors.dataTypes.nan,
            fontSize: constants.nanFontSize,
            fontWeight: constants.nanFontWeight,
            backgroundColor: colors.dataTypes.background,
            padding: constants.nanPadding,
            borderRadius: constants.nanBorderRadius
        },
        null: {
            display: 'inline-block',
            color: colors.dataTypes.null,
            fontSize: constants.nullFontSize,
            fontWeight: constants.nullFontWeight,
            backgroundColor: colors.dataTypes.background,
            padding: constants.nullPadding,
            borderRadius: constants.nullBorderRadius
        },
        undefined: {
            display: 'inline-block',
            color: colors.dataTypes.undefined,
            fontSize: constants.undefinedFontSize,
            padding: constants.undefinedPadding,
            borderRadius: constants.undefinedBorderRadius,
            backgroundColor: colors.dataTypes.background,
        },
        'copy-to-clipboard': {
            cursor: constants.clipboardCursor
        },
        'copy-icon': {
            color: colors.copyToClipboard,
            fontSize: constants.iconFontSize,
            marginRight: constants.iconMarginRight,
            verticalAlign: 'top',
        },
        'object-meta-data': {
            display: 'inline-block',
            padding: constants.metaDataPadding
        },
        'icon-container': {
            display: 'inline-block',
            width: constants.iconContainerWidth
        },
        'tooltip': {
            padding: constants.tooltipPadding
        },
        removeVarIcon: (component, hover) => {
            let style = {
                verticalAlign: 'top',
                display: 'none',
                color: colors.editVariable.removeIcon,
                cursor: constants.iconCursor,
                fontSize: constants.iconFontSize,
                marginRight: constants.iconMarginRight
            };
            if (hover) {
                style.display = 'inline-block';
            }
            return {style: style};
        },
        addVarIcon: (component, hover) => {
            let style = {
                verticalAlign: 'top',
                display: 'none',
                color: colors.editVariable.addIcon,
                cursor: constants.iconCursor,
                fontSize: constants.iconFontSize,
                marginRight: constants.iconMarginRight
            };
            if (hover) {
                style.display = 'inline-block';
            }
            return {style: style};
        },
        editVarIcon: (component, hover) => {
            let style = {
                verticalAlign: 'top',
                display: 'none',
                color: colors.editVariable.editIcon,
                cursor: constants.iconCursor,
                fontSize: constants.iconFontSize,
                marginRight: constants.iconMarginRight
            };
            if (hover) {
                style.display = 'inline-block';
            }
            return {style: style};
        },
        'edit-icon-container': {
            display: 'inline-block',
            verticalAlign: 'top'
        },
        'check-icon': {
            display: 'inline-block',
            cursor: constants.iconCursor,
            color: colors.editVariable.checkIcon,
            fontSize: constants.iconFontSize,
            paddingRight: constants.iconPaddingRight
        },
        'cancel-icon': {
            display: 'inline-block',
            cursor: constants.iconCursor,
            color: colors.editVariable.cancelIcon,
            fontSize: constants.iconFontSize,
            paddingRight: constants.iconPaddingRight,
        },
        'edit-input': {
            display: 'inline-block',
            minHeight: constants.editInputHeight,
            minWidth: constants.editInputMinWidth,
            borderRadius: constants.editInputBorderRadius,
            backgroundColor: colors.editVariable.background,
            color: colors.editVariable.color,
            padding: constants.editInputPadding,
            marginRight: constants.editInputMarginRight,
            fontFamily: constants.editInputFontFamily,
        },
        'detected-row': {
            paddingTop: constants.detectedRowPaddingTop,
        },
        'add-key-request': {
            position: constants.addKeyCoverPosition,
            top: constants.addKeyCoverPositionPx,
            left: constants.addKeyCoverPositionPx,
            right: constants.addKeyCoverPositionPx,
            bottom: constants.addKeyCoverPositionPx,
            backgroundColor: constants.addKeyCoverBackground
        },
        'add-key-modal': {
            width: constants.addKeyModalWidth,
            backgroundColor: colors.addKeyModal.background,
            marginLeft: constants.addKeyModalMargin,
            marginRight: constants.addKeyModalMargin,
            padding: constants.addKeyModalPadding,
            borderRadius: constants.addKeyModalRadius,
            marginTop: '15px',
            position: 'relative'
        },
        'add-key-label': {
            color: colors.addKeyModal.labelColor,
            marginLeft: '2px',
            marginBottom: '5px',
            fontSize: '11px'
        },
        'add-key-input-container': {
            overflow: 'hidden'
        },
        'add-key-input': {
            width: '100%',
            padding: '3px 6px',
            fontFamily: 'monospace',
            color: colors.addKeyModal.color,
            border: 'none',
            boxSizing: 'border-box',
            borderRadius: '2px'
        },
        'add-key-cancel': {
            backgroundColor: colors.editVariable.removeIcon,
            position: 'absolute',
            top: '0px',
            right: '0px',
            borderRadius: '0px 3px 0px 3px',
            cursor: 'pointer'
        },
        'add-key-cancel-icon': {
            color: colors.addKeyModal.labelColor,
            fontSize: constants.iconFontSize,
            transform: "rotate(45deg)"
        },
        'add-key-submit': {
            color: colors.editVariable.addIcon,
            fontSize: constants.iconFontSize,
            position: 'absolute',
            right: '2px',
            top: '3px',
            cursor: 'pointer'
        },
        'function-ellipsis': {
            display: 'inline-block',
            color: colors.ellipsisColor,
            fontSize: constants.ellipsisFontSize,
            lineHeight: constants.ellipsisLineHeight,
            cursor: constants.ellipsisCursor
        }
    }
};

const getStyle = (theme) => {
    let rjv_theme = rjv_default;
    if (theme === false || theme === 'none') {
        rjv_theme = rjv_grey;
    }

    return createStyling(
        getDefaultThemeStyling,
        {defaultBase16: rjv_theme}
    )(theme);
}

export default function style(theme, component, args) {
    if (!theme) {
        console.error('theme has not been set')
    }

    return getStyle(theme)(component, args);
}