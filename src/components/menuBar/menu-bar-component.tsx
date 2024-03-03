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
    <div className="background">
      <div className="todoMain">
        <div>
          <img className={"image"} src={image} alt="" />
        </div>
        <div>
          <p className="header text">{header}</p>
          <p className="body text">{body}</p>
        </div>
      </div>

      <div className="editMain">
        <p className="text">{header}</p>
      </div>
    </div>
  );
};

interface IEditMenuBar {
  header: string;
}

export const EditMenuBar: React.FC<IEditMenuBar> = ({ header }) => {
  return (
    <div className="background editMain">
      <p className="text">{header}</p>
    </div>
  );
};
