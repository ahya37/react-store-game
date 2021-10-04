import Logo from '../../atoms/Logo';

export default function Brand() {
  return (
    <div className="col-lg-4 text-lg-start text-center">
      <a href="/" className="mb-30">
        <Logo />
      </a>
      <p className="mt-30 text-lg color-palette-1 mb-30">
        StoreGG membantu gamers
        <br />
        untuk menjadi pemenang sejati
      </p>
      <p className="mt-30 text-lg color-palette-1 mb-30">
        Copyright 2021. All Rights Reserved.
      </p>
    </div>
  );
}
