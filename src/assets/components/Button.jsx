export const Button = ({number}) => {

    const buttonText = `Week ${number}`
    
    return (
        <>
            <button class='weekBtn' >{buttonText}</button>
        </>
    )
}