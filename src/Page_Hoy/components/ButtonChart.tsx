interface props {
    label: string;
    onClick: () => void;
    showActive?: boolean;
}

export const ButtonChart = ({ label, onClick, showActive }: props) => {
    return <button 
        className={`
            w-full py-1 bg-white
            transition-base hover:brightness-[0.8] active:brightness-[0.7] 
            ${showActive && "font-semibold"}`} 
        onClick={onClick}
    >
        {label}
        </button>
}