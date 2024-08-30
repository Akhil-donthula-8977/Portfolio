import { toast } from 'react-hot-toast';
export const DoneToast = (message: string) => {
    toast.custom((t) => (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#d4edda', // Light green background
                color: '#155724', // Dark green text
                padding: '10px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                fontWeight: 'bold',
                animation: 'bounce 1s',
            }}
        >
            <span>{message}</span>
        </div>
    ), {
        position: 'top-center',
        duration: 1000,
    });
};
