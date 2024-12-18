import NvsLogo from '../../public/nvs.svg';

export default async function Nvslogo() {
    return (
        <a href="https://nvs.swiss/" target="_blank"
            rel="noopener noreferrer">
            <NvsLogo className="w-full h-full" />
        </a>
    )
}