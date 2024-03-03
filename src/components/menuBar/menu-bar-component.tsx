import "./menu-bar.styles.scss";

interface ITodoMenuBar {
  header: string;
  body?: string;
  image?: string;
}

export const TodoMenuBar: React.FC<ITodoMenuBar> = ({
  header,
  body,
  image,
}) => {
  return (
    <div className="background shadowMenuBar">
      <div className="todoMain">
        <div className="imageContainer">
          <img className={"image"} src={image} alt="" />
        </div>

        <div className="todoTextContainer">
          <span className="header textColor">{header}</span>
          <span className="todoBodyText textColor">{body}</span>
        </div>
      </div>
    </div>
  );
};

interface IEditMenuBar {
  header: string;
}

export const EditMenuBar: React.FC<IEditMenuBar> = ({ header }) => {
  return (
    <div className="background">
      <div className="editMain">
        <p className="textColor editText">{header}</p>
      </div>
    </div>
  );
};
