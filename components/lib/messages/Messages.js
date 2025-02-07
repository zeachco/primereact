import * as React from 'react';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from '../csstransition/CSSTransition';
import { MessagesBase } from './MessagesBase';
import { UIMessage } from './UIMessage';

let messageIdx = 0;

export const Messages = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = MessagesBase.getProps(inProps);

        const [messagesState, setMessagesState] = React.useState([]);
        const elementRef = React.useRef(null);

        const show = (value) => {
            if (value) {
                const messages = assignIdentifiers(value, true);

                setMessagesState(messages);
            }
        };

        const assignIdentifiers = (messageInfo, copy) => {
            let messages;

            if (Array.isArray(messageInfo)) {
                const multipleMessages = messageInfo.reduce((acc, message) => {
                    acc.push({ _pId: messageIdx++, message });

                    return acc;
                }, []);

                if (copy) {
                    messages = messagesState ? [...messagesState, ...multipleMessages] : multipleMessages;
                } else {
                    messages = multipleMessages;
                }
            } else {
                const message = { _pId: messageIdx++, message: messageInfo };

                if (copy) {
                    messages = messagesState ? [...messagesState, message] : [message];
                } else {
                    messages = [message];
                }
            }

            return messages;
        };

        const clear = () => {
            setMessagesState([]);
        };

        const replace = (messageInfo) => {
            const replaced = assignIdentifiers(messageInfo, false);

            setMessagesState(replaced);
        };

        const remove = (messageInfo) => {
            const messages = messagesState.filter((msg) => msg._pId !== messageInfo._pId);

            setMessagesState(messages);

            props.onRemove && props.onRemove(messageInfo.message);
        };

        const onClose = (messageInfo) => {
            remove(messageInfo);
        };

        React.useImperativeHandle(ref, () => ({
            props,
            show,
            replace,
            remove,
            clear,
            getElement: () => elementRef.current
        }));

        const otherProps = MessagesBase.getOtherProps(props);

        return (
            <div id={props.id} ref={elementRef} className={props.className} style={props.style} {...otherProps}>
                <TransitionGroup>
                    {messagesState &&
                        messagesState.map((message) => {
                            const messageRef = React.createRef();

                            return (
                                <CSSTransition nodeRef={messageRef} key={message._pId} classNames="p-message" unmountOnExit timeout={{ enter: 300, exit: 300 }} options={props.transitionOptions}>
                                    <UIMessage ref={messageRef} message={message} onClick={props.onClick} onClose={onClose} />
                                </CSSTransition>
                            );
                        })}
                </TransitionGroup>
            </div>
        );
    })
);

Messages.displayName = 'Messages';
