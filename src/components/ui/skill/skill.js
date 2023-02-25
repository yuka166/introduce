import './skill.css'

function Skill({ type, name, desc }) {
    return (
        <div className={'skill-' + type}>
            <div className="skill-name">{name}</div>
            <div className="skill-point">
                <div></div>
            </div>
            <div className="desc">{desc}</div>
        </div>
    );
}

export default Skill;