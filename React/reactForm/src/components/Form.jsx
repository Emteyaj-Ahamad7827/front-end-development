import { CustomForm } from './CustomForm'

export const Form = () => {

    const style = { display: "flex", alignItems: "start", flexDirection: "column", gap: "10px", width: "30%", margin: "auto"}

    const dataForm = [
    {id: "email", type: "email", placeholder: "enter your email", name: "email"},
    {id: "password", type: "password", placeholder: "enter your password", name: "password"},
    {id: "phone", type: "tel", placeholder: "enter your phone", name: "phone"},
    {id: "address", type: "textarea", placeholder: "enter your address", name: "address"},

    ]

    return (
        <CustomForm style={style} data={dataForm}/>
    )
}