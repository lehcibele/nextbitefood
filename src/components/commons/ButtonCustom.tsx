type ButtomCustomProps = {
    title: string;
    color?: string;
    border?: string | undefined;
    custom?: string | undefined;
};

export default function ButtonCustom({ 
    title, 
    color, 
    border,
    custom
}: ButtomCustomProps) {
    return (
        <button 
            className={`${color} text-white font-bold py-2 px-4 ${custom} rounded-full ${border}
                hover:opacity-70 transition duration-600 ease-in-out`}
        >
            {title}
        </button>   
    )
}