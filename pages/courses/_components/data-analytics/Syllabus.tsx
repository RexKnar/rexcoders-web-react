import { FC, Fragment } from 'react';
import Accordion from 'components/reuseable/accordion';
// -------- data -------- //
import { accordionList1 } from 'data/faq';

const Syllabus: FC = () => {
    const syllabusDetails=[
        {
            id: 'm1',
            title: 'Module 1: Introduction & Foundations',
            chapters:[
                {
                    id: 'c1',
                    title: 'Introduction to Data Analytics',
                    content: `
                    <ul>
                        <li>What is Data Analytics & Why It Matters</li>
                        <li>The Data Analytics 7-Step Process</li>
                        <li>Types of Data</li>
                        <li>Numeric, Categorical, Ordinal & Time-Based Data</li>
                    </ul>
                    `
                },
                {
                    id: 'c2',
                    title: 'Foundations: Data & Math for Analytics',
                    content: `
                    <ul>
                        <li>Measures of Central Tendency</li>
                        <li>Probability Basics</li>
                        <li>Data Distributions</li>
                        <li>Data Visualization Concepts</li>
                        <li>Fetching Datasets from Kaggle</li>
                    </ul>
                    `
                },
            ]
        },
        {
            id: 'm2',
            title: 'Module 2: Excel for Data Analytics',
            chapters:[
                {
                    id: 'c3',
                    title: 'Excel for Data Analytics – Part 1',
                    content: `
                    <ul>
                        <li>Data Loading & Formatting</li>
                        <li>Manual Data Cleaning in Excel</li>
                        <li> Data Cleaning with Power Query</li>
                        <li>Handling Missing Data</li>
                        <li>Derived Columns, Bins & Ratios</li>
                    </ul>
                    `
                },
                {
                    id: 'c4',
                    title: 'Excel for Data Analytics – Part 2',
                    content: `
                    <ul>
                        <li>Outlier Detection – Boxplots</li>
                        <li>Outlier Detection – Z-Score Logic</li>
                        <li>Univariate Charts</li>
                        <li>Bivariate Charts</li>
                        <li>Building Dashboards</li>
                    </ul>
                    `
                },
            ]
        },
        {
            id: 'm3',
            title: 'Module 3: SQL for Data Analytics',
            chapters:[
                {
                    id: 'c5',
                    title: 'SQL Basics',
                    content: `
                    <ul>
                        <li>Introduction to SQL and Relational Databases</li>
                        <li>Creating and Loading Tables</li>
                        <li> SELECT, WHERE, ORDER BY</li>
                        <li>SQL CRUD Operations</li>
                    </ul>
                    `
                },
                {
                    id: 'c6',
                    title: 'Deep into SQL',
                    content: `
                    <ul>
                        <li>Aggregate Functions</li>
                        <li>GROUP BY</li>
                        <li>JOINs – INNER and LEFT</li>
                        <li>JOINs – RIGHT and FULL</li>
                        <li>Subqueries and Derived Tables</li>
                    </ul>
                    `
                },
            ]
        },
        {
            id: 'm4',
            title: 'Module 4: Python Programming',
            chapters:[
                {
                    id: 'c7',
                    title: 'Python Programming-Basics',
                    content: `
                    <ul>
                        <li>Introduction to Python & Basics</li>
                        <li>Building Blocks</li>
                        <li>Lists, Tuples, Dictionaries</li>
                        <li>Functions and Modular Coding</li>
                    </ul>
                    `
                },
                {
                    id: 'c8',
                    title: 'Deep into Python',
                    content: `
                    <ul>
                        <li> File I/O and Reading CSVs</li>
                        <li>String Handling</li>
                        <li>Date Handling</li>
                        <li>Intro to Libraries and Environments</li>
                        <li> Scripts for Data Cleaning</li>
                    </ul>
                    `
                },
            ]
        },
        {
            id: 'm5',
            title: 'Module 5: Python Tools for Analytics',
            chapters:[
                {
                    id: 'c9',
                    title: 'NumPy for Data Analytics',
                    content: `
                    <ul>
                        <li>Introduction to NumPy and Arrays</li>
                        <li>Vectorization vs Loops</li>
                        <li>Basic Statistics using NumPy</li>
                        <li>Handling Missing Values</li>
                        <li>Filtering and Boolean Indexing</li>
                    </ul>
                    `
                },
                {
                    id: 'c10',
                    title: 'Pandas for Data Analytics',
                    content: `
                    <ul>
                        <li>Introduction to Pandas – Series & DataFrames</li>
                        <li>Reading and Writing Data</li>
                        <li>Data Selection and Indexing</li>
                        <li>Handling Missing Values</li>
                        <li>Filtering Data</li>
                    </ul>
                    `
                },
                {
                    id: 'c11',
                    title: 'Pandas for Data Analytics - Part 2',
                    content: `
                    <ul>
                        <li>GroupBy Operations</li>
                        <li>Merge and Join Operations</li>
                        <li>Feature Engineering – Derived Columns</li>
                        <li> Feature Engineering – Binning and Encoding</li>
                        <li>Outlier Detection using IQR and Z-Scores</li>
                    </ul>
                    `
                },
                {
                    id: 'c12',
                    title: 'Data Visualization with Matplotlib & Plotly',
                    content: `
                    <ul>
                        <li>Matplotlib Basics – Line and Bar Charts</li>
                        <li>Matplotlib – Scatter, Box, and Histogram</li>
                        <li>Interactive Charts with Plotly</li>
                        <li>Correlation Analysis and Pair Plots</li>
                        <li>Generating Summary Reports</li>
                    </ul>
                    `
                },
            ]
        },
        {
            id: 'm6',
            title: 'Module 6: Data Visualization using  Power BI',
            chapters:[
                {
                    id: 'c13',
                    title: 'Introduction to Bower BI',
                    content: `
                    <ul>
                        <li>Introduction to Power BI Desktop</li>
                        <li> Data Import from Excel/CSV</li>
                        <li>Data Transformation & Cleaning</li>
                        <li>Data Model Basics</li>
                        <li>Preparing Data for Reports</li>
                    </ul>
                    `
                },
                {
                    id: 'c14',
                    title: 'Deep into Power BI - Part 1',
                    content: `
                    <ul>
                        <li>Relationships Between Tables</li>
                        <li>Calculated Columns</li>
                        <li>DAX Basics</li>
                        <li>Creating Visuals – Line and Bar Charts</li>
                        <li>Creating Visuals – Maps and Cards</li>
                    </ul>
                    `
                },
                
                {
                    id: 'c15',
                    title: 'Deep into Power BI - Part 2',
                    content: `
                    <ul>
                        <li>Advanced Visuals and KPIs</li>
                        <li>Designing Business Dashboards</li>
                        <li>Storytelling with Data</li>
                        <li>Publishing Reports</li>
                    </ul>
                    `
                },
            ]
        },
      ]
  return (
    <Fragment>
      <h2 className="mb-3 text-center fs-15 text-uppercase text-muted">Syllabus</h2>
      {/* <h3 className='display-3 ls-sm mb-9 px-xl-11'> */}
      <h3 className="mb-10 text-center display-4 px-lg-12 px-xl-15">
      What You’ll Learn</h3>
      {/* <h3 className="mb-10 text-center display-4 px-lg-12 px-xl-15">
        If you don't see an answer to your question, you can send us an email from our contact form.
      </h3> */}

      <div className="accordion-wrapper" id="accordion">
        
          {syllabusDetails.map((module, i) => {
            return (
                <div className="pt-5 d-flex align-items-center border-top border-primary row" key={module.id}><div className="col-md-6" key={i}>
                    <h3 className="my-auto mb-3 text-left fs-15 text-uppercase ">{module.title}</h3>

                </div><div className="col-md-6" key={i}>
                {module.chapters.map((chapter) => (
                  <Accordion no={chapter.id} content={chapter.content} heading={chapter.title} expand={false} key={chapter.id} />
                ))}
                    </div>
                    </div>
            );
          })}
        </div>
    </Fragment>
  );
};

export default Syllabus;
