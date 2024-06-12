import TrainingStep from './TrainingStep';

const TrainingSchema = () => {
  return (
    <div className="flex flex-col gap-2 p-10">
      <TrainingStep title="First preparatory year" link="/Academics/Education/first-preparatory-year" />
      <TrainingStep title="Second preparatory year" link="/Academics/Education/second-preparatory-year" />
      <TrainingStep title="Common core of the second cycle" link="/Academics/Education/Common-core-of-the-second-cycle" />
      <TrainingStep title="Computer Systems (SIQ)" link="/Academics/Education/SIQ-Specialty" />
      <TrainingStep title="Information Systems and Technologies(SIT)" link="/Academics/Education/Specialty-SIT" />
      <TrainingStep title="Computer Systems and Software (SIL)" link="/Academics/Education/SIL-Specialty" />
      <TrainingStep title="Intelligent Systems and Data (SID)" link="/Academics/Education/Specialty-SID" />
      <TrainingStep title="MASTER /EIF COMPLÉMENTAIRE" link="/Academics/Education/Master" />
      <TrainingStep title="FORMATION DOCTORALE" link="/Academics/Education/Doctoral-Training" />
    </div>
  );
};

export default TrainingSchema;
