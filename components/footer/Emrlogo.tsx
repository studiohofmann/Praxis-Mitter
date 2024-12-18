import EmrLogo from '../../public/emr.svg';

export default async function Emrlogo() {
    return (
        <a href="https://emr.ch/qualitaetslabel" target="_blank"
            rel="noopener noreferrer">
            <EmrLogo className="w-full h-full" />
        </a>
    )
}