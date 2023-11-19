import React from 'react'
import SLayout from './SLayout'
import SHeader from './SHeader'
import SSidebar from './SSidebar'
import SIssuedetails from './SIssuedetails'

const SIssue = () => {
  return (
    <div>
      <SLayout>
        <SHeader/>
        <SSidebar/>
        <SIssuedetails/>
      </SLayout>
    </div>
  )
}

export default SIssue
