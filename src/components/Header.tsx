import { useNavigate } from "react-router-dom"

interface PropsButtonNavigator {
    label: string;
    to: string;
}

const ButtonNavigator = ({label, to}: PropsButtonNavigator) => {
    const navigator = useNavigate(); 

    return (
        <button
            onClick={()=> navigator(to)}
            className="w-[100px] transition-base hover:bg-slate-500 active:bg-slate-600"
        >
            {label}
        </button>
    )

}

export const Header = () => {


    return (
        <header className="bg-slate-800 text-white">
            <div className="mx-2">
                <ButtonNavigator label="Hoy" to="/" />
                <ButtonNavigator label="Semanal" to="/semanal" />
                <ButtonNavigator label="Meses" to="/meses" />
                <ButtonNavigator label="Historico" to="/historico" />
            </div>
        </header>
    )
}