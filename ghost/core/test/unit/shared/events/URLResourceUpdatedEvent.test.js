const assert = require('assert/strict');
const {URLResourceUpdatedEvent} = require('../../../../core/shared/events');

describe('URLResourceUpdatedEvent', function () {
    it('exports a static create method to create instances', function () {
        const event = URLResourceUpdatedEvent.create({
            id: 'resource-id'
        });

        assert(event instanceof URLResourceUpdatedEvent);
    });
});
