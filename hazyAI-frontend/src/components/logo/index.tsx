import logo from '../../assets/hazyAI-logo.svg';

type Props = {}

const Logo = (props: Props) => {

    return (
        <div>
            <img src={logo} alt='Hazy AI logo' width={300} height={300} />
        </div>
    )
}

export default Logo;
