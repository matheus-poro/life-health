import './Button.css';

interface ButtonProps {
    styleBtn: string | undefined;
    children: any;
}

const Button: React.FC<ButtonProps> = ({ children, styleBtn, ...props }: any) => {
    return (
        <button {...props} className={styleBtn}>
            {children}
        </button>
    );
};

export default Button;