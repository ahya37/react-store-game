import Company from './Company';
import Contact from './Contact';
import Support from './Support';

export default function Menu() {
  return (
    <div className="col-lg-8 mt-lg-0 mt-20">
      <div className="row gap-sm-0">
        <div className="col-md-4 col-6 mb-lg-0 mb-25">
          <Company />
        </div>
        <div className="col-md-4 col-6 mb-lg-0 mb-25">
          <Support />
        </div>
        <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
          <Contact />
        </div>
      </div>
    </div>
  );
}
