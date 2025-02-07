import { ObjectUtils } from '../utils/Utils';

export const ImageBase = {
    defaultProps: {
        __TYPE: 'Image',
        alt: null,
        className: null,
        closeIcon: null,
        crossOrigin: null,
        decoding: null,
        downloadIcon: null,
        downloadable: false,
        height: null,
        imageClassName: null,
        imageStyle: null,
        indicatorIcon: null,
        loading: null,
        onError: null,
        onHide: null,
        onShow: null,
        preview: false,
        referrerPolicy: null,
        rotateLeftIcon: null,
        rotateRightIcon: null,
        src: null,
        template: null,
        useMap: null,
        width: null,
        zoomInIcon: null,
        zoomOutIcon: null,
        zoomSrc: null,
        children: undefined
    },
    getProps: (props) => ObjectUtils.getMergedProps(props, ImageBase.defaultProps),
    getOtherProps: (props) => ObjectUtils.getDiffProps(props, ImageBase.defaultProps)
};
