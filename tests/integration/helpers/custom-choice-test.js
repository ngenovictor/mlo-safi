
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('custom-choice', 'helper:custom-choice', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{custom-choice inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

