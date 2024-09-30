export default function Tabs({children, buttons, buttonContainer}){
    //kenapa pake const dan hurufnya gede, supaya dia dianggap pake custom component 
    //kalau pake b kecil, dia bakal cari built-in component, dan gk bakal ketemu 
    const ButtonContainer = buttonContainer;
    return (
    <>
        <ButtonContainer>{buttons}</ButtonContainer>
        {children}
    </>
    );
}