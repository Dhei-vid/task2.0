import "./button.styles.scss";

interface IButton {
  isDelete?: boolean;
  isSave?: boolean;
  isEdit?: boolean;
  isAdd?: boolean;
  onPress: () => void;
}

const Button: React.FC<IButton> = ({
  isDelete,
  isSave,
  isEdit,
  isAdd,
  onPress,
}) => {
  return (
    <div>
      {isDelete && (
        <div>
          <div></div>
        </div>
      )}

      {isSave && (
        <div>
          <div></div>
        </div>
      )}

      {isEdit && (
        <div>
          <button className={"isEditBtn"} onClick={onPress}>
            Edit
          </button>
        </div>
      )}

      {isAdd && (
        <div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Button;
