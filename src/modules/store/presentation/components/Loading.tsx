import {Spinner} from "solid-bootstrap";

export const Loading = () => (
    <Spinner
        animation="grow"
        variant="warning"
        style={{
            position: 'fixed',
            top:0,
            left: 0,
            width: '100%',
            height: '100%',
            'background-color': 'rgba(255,255,255,0.8)',
            display: 'flex',
            "justify-content": 'center',
            "align-items": 'center',
            "z-index": 9999
        }}
    />
);