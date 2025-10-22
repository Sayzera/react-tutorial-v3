const Button = ({ variant, btnText, handleClick }) => {
  // const {variant, btnText} = props;

  // props.variant
  // props.btnText

  const styles = {
    success: {
      border: "1px solid white",
      borderRadius: "10px",
      padding: 10,
      color: "white",
      cursor: "pointer",
      backgroundColor: "green",
    },
    info: {
      border: "1px solid white",
      borderRadius: "10px",
      padding: 10,
      color: "white",
      cursor: "pointer",
      backgroundColor: "blue",
    },
    danger: {
      border: "1px solid white",
      borderRadius: "10px",
      padding: 10,
      color: "white",
      cursor: "pointer",
      backgroundColor: "red",
    },
    secondary: {
      border: "1px solid white",
      borderRadius: "10px",
      padding: 10,
      color: "white",
      cursor: "pointer",
      backgroundColor: "gray",
    },
    default: {
      border: "1px solid white",
      borderRadius: "10px",
      padding: 10,
      color: "white",
      cursor: "pointer",
      backgroundColor: "gray",
    },
  };

  const _variant = variant ?? "default";

  return (
    <button
      style={styles[_variant]}
      onClick={() => {
        handleClick && typeof handleClick === "function" && handleClick();
      }}
    >
      {btnText}
    </button>
  );
};

export { Button };
