import Link from 'next/link';
import Logo from '../components/atoms/Logo';
import SignUpForm from '../components/organisms/SignUpForm';

export default function SignUp() {
  return (
    <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
      <div className="container mx-auto">
        <form action="">
          <div className="pb-50">
            <Link href="/">
              <a className="navbar-brand">
                <Logo />
              </a>
            </Link>
          </div>
          <SignUpForm />
        </form>
      </div>
    </section>
  );
}
