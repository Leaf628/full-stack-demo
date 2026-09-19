import './ParagraphSection.css';

function ParagraphSection({text}: {text:string[]}) {
    return(
        <section className="paragraph-section">
            This section iterates over paragraph properties that are passed in by whatever parent renders this component.
            {text.map(t => <p>{t}</p> )}
        </section>
    );
};

export default ParagraphSection;