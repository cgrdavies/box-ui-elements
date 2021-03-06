import React from 'react';

import IconCollectionsBolt from '../IconCollectionsBolt';

describe('icons/collections/IconCollectionsBolt', () => {
    const getWrapper = (props = {}) => shallow(<IconCollectionsBolt {...props} />);

    test('should correctly render default icon', () => {
        const wrapper = getWrapper();

        expect(wrapper).toMatchSnapshot();
    });
});
