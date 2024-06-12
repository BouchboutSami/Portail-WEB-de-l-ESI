import TrainingStep from './TrainingStep';

const TrainingSchema = () => {
  return (
    <div className="flex flex-col gap-2 p-10">
      <TrainingStep title="First preparatory year" link="/Training-offers/first-preparatory-year" />
      <TrainingStep title="Second preparatory year" link="/Training-offers/second-preparatory-year" />
      <TrainingStep title="Common core of the second cycle" link="/Training-offers/Common-core-of-the-second-cycle" />
      <TrainingStep title="Computer Systems (SIQ)" link="/Training-offers/SIQ-Specialty" />
      <TrainingStep title="Information Systems and Technologies(SIT)" link="/Training-offers/Specialty-SIT" />
      <TrainingStep title="Computer Systems and Software (SIL)" link="/Training-offers/SIL-Specialty" />
      <TrainingStep title="Intelligent Systems and Data (SID)" link="/Training-offers/Specialty-SID" />
      <TrainingStep title="MASTER /EIF COMPLÉMENTAIRE" link="/Training-offers/Master" />
      <TrainingStep title="FORMATION DOCTORALE" link="/Training-offers/Doctoral-Training" />
    </div>
  );
};

export default TrainingSchema;
