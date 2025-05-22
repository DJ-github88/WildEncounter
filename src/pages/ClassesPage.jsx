import ClassesGrid from '../components/classes/ClassesGrid';
import './ClassesPage.css';

const ClassesPage = () => {
  return (
    <div className="classes-page">
      <div className="classes-header">
        <h1 className="page-title">Character Classes</h1>
        <p className="page-description">
          Explore the unique classes available in our TTRPG system. Each class has its own mechanics,
          playstyle, and talent trees that allow for deep customization.
        </p>
      </div>

      <ClassesGrid />
    </div>
  );
};

export default ClassesPage;
