import RcTable from 'rc-table';
import PropTypes from 'prop-types';
import { COLUMNS } from '../constants';

export const Table = ({ data = [] }) => {
  return <RcTable data={data} columns={COLUMNS} />;
};

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      resource: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
};
