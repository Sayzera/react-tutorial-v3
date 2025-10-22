const Button = (props) => {
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
        props?.onClick && typeof props.onClick === "function"
          ? props.onClick()
          : null;
      }}
      style={styles[props.variant ?? "default"]}
    >
      {props.btnText}
    </button>
  );
};

// const Button2 = () => {
//     return (
//         <div>button</div>
//     )
// }

export {
  Button,
  // Button2
};
