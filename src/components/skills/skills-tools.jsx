import { SiAsana, SiJira, SiSlack } from 'react-icons/si';

const icons = [
  {
    key: 1,
    icon: SiAsana,
    title: 'Asana',
  },
  {
    key: 2,
    icon: SiJira,
    title: 'Jira',
  },
  {
    key: 3,
    icon: SiSlack,
    title: 'Slack',
  },
];

const ToolsSkills = () => {
  return (
    <div className="skills-content__group">
      <h4>Tools</h4>
      <ul>
        {icons.map((item) => {
          return (
            <li key={item.key} title={item.title}>
              <item.icon />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToolsSkills;
