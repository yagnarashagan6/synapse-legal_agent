import { DashboardLayout } from '../components/layout/DashboardLayout';
import { MetricCard } from '../components/cards/MetricCard';
import { AlertCard } from '../components/cards/AlertCard';
import { IntelligenceCard } from '../components/cards/IntelligenceCard';
import { ValidationCard } from '../components/cards/ValidationCard';
import { ActivityCard } from '../components/cards/ActivityCard';
import { Button } from '../components/ui/Button';
import { 
  Activity, 
  AlertOctagon, 
  FileText, 
  CheckSquare, 
  Mail, 
  Share2, 
  TrendingUp,
  Database,

  Shield,
  Edit3,
  Layers,
  CheckCircle,
  ShieldCheck,
  Bot
} from 'lucide-react';

export function Dashboard() {
  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <div className="flex-1 space-y-8 min-w-0">
          
          {/* Top Metric Cards Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <MetricCard icon={<Shield className="text-blue-500" size={24} />} value="47" label="Active Trademark Monitoring" />
            <MetricCard icon={<AlertOctagon className="text-danger" size={24} />} value="2" label="High Risk Filings" />
            <MetricCard icon={<Edit3 className="text-warning" size={24} />} value="5" label="AI Drafts Pending Validation" />
            <MetricCard icon={<CheckSquare className="text-success" size={24} />} value="156" label="Validated Templates" />
            <MetricCard icon={<Mail className="text-indigo-500" size={24} />} value="1" label="Newsletter Scheduled" />
            <MetricCard icon={<Share2 className="text-pink-500" size={24} />} value="2" label="Posts Scheduled" />
            <MetricCard icon={<TrendingUp className="text-success" size={24} />} value="+8.4%" label="Engagement Growth (30d)" trendPositive trend="+8.4%" />
          </div>

          {/* Priority Alerts Section */}
          <div className="border border-red-200 rounded-xl overflow-hidden shadow-sm relative pt-6 bg-white">
            <div className="absolute top-0 left-0 right-0 h-1 bg-danger"></div>
            <div className="px-6 mb-4">
              <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <AlertOctagon className="text-danger" size={20} />
                Priority Alerts
              </h2>
            </div>
            <div className="px-6 pb-6 space-y-4">
              <AlertCard 
                type="danger"
                title="Opposition Window Closing – TECHVISION PLUS"
                badgeText="3 days remaining"
                description="EUIPO opposition deadline approaching"
                buttonText="Review Opposition Strategy"
              />
              <AlertCard 
                type="warning"
                title="Draft Below 90% AI Confidence – SaaS Agreement"
                description="Clause 3 requires manual legal review"
                buttonText="Review Draft"
              />
              <AlertCard 
                type="warning"
                title="Missing Client Data – DataVault GDPR Policy"
                description="Contract duration and territory fields incomplete"
                buttonText="Complete Data"
              />
            </div>
          </div>

          {/* Intelligence Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <IntelligenceCard 
              title="Trademark Intelligence"
              items={[
                { label: 'High Risk Filings', value: '2', isWarning: true },
                { label: 'Next Opposition Deadline', value: 'Oct 27, 2026', isWarning: true },
                { label: 'Last TMView Sync', value: '2 hours ago' },
              ]}
              buttonText="Generate Monthly Report"
            />
            
            <IntelligenceCard 
              title="Controlled Drafting"
              items={[
                { label: 'Drafts This Week', value: '14' },
                { label: 'Clauses Awaiting Approval', value: '8' },
                { label: 'Client Data Completeness', value: '94%' },
              ]}
              buttonText="Continue Draft"
              primaryAction
            />

            <div className="bg-card rounded-xl border border-border shadow-sm p-6 flex flex-col h-full hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-800 mb-6">Newsletter Intelligence</h3>
              <div className="space-y-4 mb-6 flex-1">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="text-sm font-medium text-slate-500">Updates detected</span>
                  <span className="text-sm font-semibold text-slate-800">12</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="text-sm font-medium text-slate-500">Next schedule</span>
                  <span className="text-sm font-semibold text-slate-800">Nov 1, 2026</span>
                </div>
                <div className="pt-2">
                  <label className="text-xs font-semibold text-slate-500 mb-2 block uppercase tracking-wider">AI Topic</label>
                  <input type="text" value="EU AI Act Implications" readOnly className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 focus:outline-none" />
                </div>
              </div>
              <Button variant="outline" className="w-full bg-slate-50 border-slate-200 text-sm font-medium">Edit Newsletter</Button>
            </div>

            <div className="bg-card rounded-xl border border-border shadow-sm p-6 flex flex-col h-full hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-800 mb-6">Marketing & Visibility</h3>
              <div className="space-y-4 mb-6 flex-1">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="text-sm font-medium text-slate-500">LinkedIn Engagement</span>
                  <span className="text-sm font-semibold text-success">+14%</span>
                </div>
                <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                  <span className="text-sm font-medium text-slate-500">Instagram Growth</span>
                  <span className="text-sm font-semibold text-success">+5%</span>
                </div>
                <div className="pt-2">
                  <label className="text-xs font-semibold text-slate-500 mb-2 block uppercase tracking-wider">Trending topic</label>
                  <input type="text" value="Data Privacy in 2027" readOnly className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 focus:outline-none" />
                </div>
              </div>
              <Button variant="outline" className="w-full bg-slate-50 border-slate-200 text-sm font-medium">Create AI Post</Button>
            </div>
          </div>

          {/* Validation & Integrities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Human Validation Section */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
               <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 border-l-4 border-l-warning">
                 <h3 className="font-bold text-slate-800">Human Validation Required</h3>
               </div>
               <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                 <ValidationCard 
                    title="SaaS Agreement – TechVision"
                    statusText="clauses approved"
                    statusRatio="6/8"
                    primaryAction="Approve"
                    secondaryAction="Revise"
                 />
                 <ValidationCard 
                    title="Trademark Risk Assessment"
                    statusText="Awaiting Review"
                    primaryAction="Approve"
                    secondaryAction="Revise"
                 />
                 <ValidationCard 
                    title="Newsletter Draft"
                    statusText="Ready"
                    primaryAction="Approve"
                    secondaryAction="Open"
                 />
                 <ValidationCard 
                    title="LinkedIn Post"
                    statusText="Ready"
                    primaryAction="Approve"
                    secondaryAction="Revise"
                 />
               </div>
            </div>

            <div className="space-y-6">
              {/* Knowledge Core Integrity */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 pb-2">
                <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <ShieldCheck className="text-success" size={20} />
                  Knowledge Core Integrity
                </h3>
                <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-6">
                    <div>
                      <div className="text-sm font-medium text-slate-500 mb-1">Templates Validated</div>
                      <div className="font-semibold text-slate-800">156</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-500 mb-1">Compliance Updates</div>
                      <div className="font-semibold text-slate-800">12</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-500 mb-1">Updated This Month</div>
                      <div className="font-semibold text-slate-800">4</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-500 mb-1">Client Data Entries</div>
                      <div className="font-semibold text-slate-800">1,048</div>
                    </div>
                </div>
                <div className="bg-success/10 text-success text-sm font-semibold rounded-lg p-3 text-center mb-4 flex items-center justify-center gap-2">
                  <CheckCircle size={16} /> AI Hallucination Prevention: Active
                </div>
              </div>

               {/* AI Operational Summary Card */}
              <div className="bg-gradient-to-br from-[#1E293B] to-[#0F1B2A] rounded-xl border border-[#B89B5E]/30 shadow-lg p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20"><Bot size={100} className="text-[#B89B5E]"/></div>
                <h3 className="font-bold text-white mb-6 relative z-10 flex items-center gap-2">
                  <Activity className="text-[#B89B5E]" size={20} />
                  AI Operational Summary
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10 border-t border-white/10 pt-4">
                  <div>
                      <div className="text-xs font-semibold text-slate-400 mb-1">Trademark Risks Detected</div>
                      <div className="font-bold text-white text-xl">12</div>
                  </div>
                  <div>
                      <div className="text-xs font-semibold text-slate-400 mb-1">Legal Drafts Generated</div>
                      <div className="font-bold text-white text-xl">48</div>
                  </div>
                  <div>
                      <div className="text-xs font-semibold text-slate-400 mb-1">Newsletter Prepared</div>
                      <div className="font-bold text-white text-xl">4</div>
                  </div>
                  <div>
                      <div className="text-xs font-semibold text-slate-400 mb-1">Template Restricted Drafting</div>
                      <div className="font-bold text-[#B89B5E] text-xl">2</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Sidebar - Recent Activity Panel */}
        <div className="w-full lg:w-[320px] shrink-0">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm h-full max-h-[calc(100vh-140px)] flex flex-col sticky top-28">
            <div className="p-6 border-b border-slate-100 shrink-0">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <Activity size={18} className="text-slate-400" /> 
                Recent System Activity
              </h3>
            </div>
            
            <div className="overflow-y-auto flex-1 p-2 space-y-1">
              <ActivityCard icon={<FileText size={16} />} title="AI Draft Generated" time="10 mins ago" iconBgColor="bg-blue-50 text-blue-500" />
              <ActivityCard icon={<Database size={16} />} title="TMView Database Synced" time="2 hours ago" iconBgColor="bg-green-50 text-green-500" />
              <ActivityCard icon={<Mail size={16} />} title="Newsletter Draft Created" time="5 hours ago" iconBgColor="bg-purple-50 text-purple-500" />
              <ActivityCard icon={<Share2 size={16} />} title="Instagram Post Scheduled" time="Yesterday, 14:20" iconBgColor="bg-pink-50 text-pink-500" />
              <ActivityCard icon={<Layers size={16} />} title="Template Updated" time="Yesterday, 09:15" iconBgColor="bg-amber-50 text-amber-500" />
              <ActivityCard icon={<CheckSquare size={16} />} title="Client Data Validated" time="Oct 22, 2026" iconBgColor="bg-slate-100 text-slate-500" />
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
