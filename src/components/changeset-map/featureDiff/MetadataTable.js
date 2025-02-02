import React from 'react';
import PropTypes from 'prop-types';
import { osmBaseUrl } from '../../../config/constants';
import { propsDiff } from '../propsDiff';
import { Dropdown } from '../dropdown';
import { DiffTable } from './DiffTable';
import { FlagButton } from './FlagButton';

export const MetadataTable = function({ featuresWithId, id, changesetId }) {
  const type = featuresWithId[0].properties.type;
  const metadataProps = featuresWithId.map(function(f) {
    var filteredProps = Object.assign({}, f.properties);
    delete filteredProps.tags;
    delete filteredProps.tagsCount;
    delete filteredProps.relations;
    delete filteredProps.action;
    return filteredProps;
  });
  const token = localStorage.getItem('token');

  const metadataHeader = (
    <div className="cmap-space-between">
      <div className="cmap-block">
        <span>
          {type.toUpperCase()}: {id}
        </span>
      </div>
      <div id="cmap-feature-btns">
        <Dropdown
          display="History"
          options={[
            {
              label: 'OSM',
              href: `${osmBaseUrl}/${type}/${id}/history`
            }
          ]}
        />
        <Dropdown
          display="Open feature"
          options={[
            {
              label: 'OSM',
              href: `${osmBaseUrl}/${type}/${id}`
            },
            {
              label: 'iD',
              href: `${osmBaseUrl}/edit?editor=id&${type}=${id}`
            },
            {
              label: 'JOSM',
              href: `http://127.0.0.1:8111/load_object?new_layer=true&objects=${type[0]}${id}`
            }
          ]}
        />
        {token && (
          <FlagButton
            token={token}
            type={type}
            id={id}
            changesetId={changesetId}
          />
        )}
      </div>
    </div>
  );

  return (
    <DiffTable
      diff={propsDiff(metadataProps)}
      ignoreList={['id', 'type', 'changeType']}
      header={metadataHeader}
    />
  );
};

MetadataTable.propTypes = {
  featuresWithId: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  changesetId: PropTypes.number.isRequired
};
