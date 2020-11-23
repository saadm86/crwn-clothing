import './collections-overview.styles.scss'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import {connect} from 'react-redux'
import {selectShopCollections} from '../../redux/shop/shop.selectors'
import {createStructuredSelector} from 'reselect'

import React from 'react'

const CollectionsOverview = ({collections}) => {
  return (
    <div className='collections-overview'>
                {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
                }
            </div>
  )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
