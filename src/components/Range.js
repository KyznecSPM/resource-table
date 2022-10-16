import { Range as LibRange, getTrackBackground } from 'react-range';
import PropTypes from 'prop-types';
import { getCurrentRange } from '../helpers';
import { STEP } from '../constants';

export const Range = ({ min = 0, max = 1, values, rangeChange }) => {
  const currentRange = getCurrentRange(values[0]);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '2em',
      }}
    >
      <LibRange
        values={values}
        step={STEP}
        min={min}
        max={max}
        onChange={rangeChange}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%',
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values: values,
                  colors: ['#548BF4', '#ccc'],
                  min,
                  max,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '42px',
              width: '42px',
              borderRadius: '4px',
              backgroundColor: '#FFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #AAA',
            }}
          >
            <div
              style={{
                height: '16px',
                width: '5px',
                backgroundColor: isDragged ? '#548BF4' : '#CCC',
              }}
            />
          </div>
        )}
      />
      <output style={{ marginTop: '30px' }} id="output">
        {currentRange}
      </output>
    </div>
  );
};

Range.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  rangeChange: PropTypes.func.isRequired,
};
