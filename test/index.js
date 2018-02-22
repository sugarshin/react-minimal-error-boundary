// TODO
import test from 'ava'
import React from 'react'
import render from 'react-test-renderer'
import MinimalErrorBoundary from '../src'

test('render', t => {
	const tree = render.create(<MinimalErrorBoundary><div>App</div></MinimalErrorBoundary>).toJSON()
	t.snapshot(tree)
})
