import stl from "./GalleryBtnStyle.module.scss";

type GalleryBtnProp ={
    btnText : string
}

const GalleryBtn = ({btnText}:GalleryBtnProp) => {
  return (
    <>
      <div className={stl.btnWrapper}>
        <h4>{btnText}</h4>
      </div>
    </>
  );
};

export default GalleryBtn;
