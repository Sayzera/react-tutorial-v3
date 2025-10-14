const DestructingButton = ({onClick = false, variant,btnText}) => {

  const styles = {
    success: {
      padding: 10,
      borderRadius: 10,
      backgroundColor: "green",
      color: "white",
    },
    danger: {
      padding: 10,
      borderRadius: 10,
      backgroundColor: "red",
      color: "white",
    },
    secondary: {
      padding: 10,
      borderRadius: 10,
      backgroundColor: "grey",
      color: "white",
    },
    default: {
      padding: 10,
      borderRadius: 10,
      backgroundColor: "grey",
      color: "white",
    },
  };


  return (
    <button
      onClick={() => {
        onClick && typeof onClick === "function"
          ? onClick()
          : null;
      }}
      style={styles[variant ?? "default"]}
    >
      {btnText}
    </button>
  );
};

// const Button2 = () => {
//     return (
//         <div>button</div>
//     )
// }

export {
  DestructingButton,
  // Button2
};
