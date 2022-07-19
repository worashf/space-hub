import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getDataThunk } from '../redux/missions/missions';
import MissionsItem from './MissionsItem';
import './Missions.css';

let load = false;

const Missions = () => {
  const dispatch = useDispatch();
  const missionData = useSelector((state) => state.missions.missions);
  const missionList = [];

  if (!load) {
    load = true;
    dispatch(getDataThunk());
  }

  missionData.forEach((mission) => {
    missionList.push((
      <MissionsItem
        name={mission.name}
        id={mission.id}
        description={mission.description}
      />
    ));
  });

  return (
    <Table striped bordered id="table">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th style={{ width: '165px' }}>Status</th>
          <th style={{ width: '165px' }}> </th>
        </tr>
      </thead>
      <tbody>
        {missionList}
      </tbody>
    </Table>
  );
};

export default Missions;
