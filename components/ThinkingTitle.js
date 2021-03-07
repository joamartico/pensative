

const ThinkingTitle = ({value, placeholder, editable}) => {
    return (
        <ion-textarea 
        placeholder={placeholder}
        autofocus={value ? false : true} 
        readonly={editable ? false : true} 
        value={value}
        auto-grow={true}
        rows={1}
        style={{fontSize: 30, fontWeight: "bold", width: "100%"}}/>
    )
}

export default ThinkingTitle
