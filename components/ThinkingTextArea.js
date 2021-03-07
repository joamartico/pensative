

const ThinkingTextArea = ({ value, placeholder, editable }) => {
	return (
		<ion-textarea
            placeholder={placeholder}
            auto-grow={true}
			autofocus={value ? false : true}
			readonly={editable ? false : true} 
			value={value}
			style={{ width: "100%", height: "100%" }}
		/>
	);
};

export default ThinkingTextArea;
