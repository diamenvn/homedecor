import React from 'react'
import { getService } from 'vc-cake'
const portoComponent = getService( 'portoComponent' )

export default class PortoShopFilter extends portoComponent.shortcodeComponent {

	getShortcode() {
		return '[porto_sb_filter]'
	}
	render() {
		const { id, atts, editor } = this.props
		let { sbAlign, el_class } = atts // destructuring assignment for attributes from settings.json with access publc
		let wrappr_cls = "vc-shop-filter"
		wrappr_cls = wrappr_cls.concat( ` shop-filter-${ id }` )

		if ( sbAlign ) {
			wrappr_cls = wrappr_cls.concat( ` text-${ sbAlign }` )
		}

		if ( typeof el_class === 'string' && el_class ) {
			wrappr_cls += ' ' + el_class
		}

		const doAll = this.applyDO( 'margin border padding animation' )

		return (
			<div className={ wrappr_cls } { ...editor } id={ 'el-' + id } { ...doAll }>
				<div className='vcvhelper' ref='vcvhelper' data-vcvs-html={ this.getShortcode() } >
					<h3 class="widget-title">To change the products Archives's layout, go to Porto / Theme Options / WooCommerce / Product Archives.<br />The editor's preview might look different from the live site. Please check the frontend.</h3>
				</div>
			</div>
		)
	}
}
