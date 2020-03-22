CREATE TABLE "counties" (
	"county_id" SERIAL PRIMARY KEY,
	"county_name" VARCHAR(255)
);

INSERT INTO "counties" ("county_name") VALUES ('Aitkin'),
('Anoka'),
('Becker'),
('Beltrami'),
('Benton'),
('Big Stone'),
('Blue Earth'),
('Brown'),
('Carlton'),
('Carver'),
('Cass'),
('Chippewa'),
('Chisago'),
('Clay'),
('Clearwater'),
('Cook'),
('Cottonwood'),
('Crow Wing'),
('Dakota'),
('Dodge'),
('Douglas'),
('Faribault'),
('Fillmore'),
('Freeborn'),
('Goodhue'),
('Grant'),
('Hennepin'),
('Houston'),
('Hubbard'),
('Isanti'),
('Itasca'),
('Jackson'),
('Kanabec'),
('Kaniyohi'),
('Kittson'),
('Koochiching'),
('Lac Qui Parle'),
('Lake'),
('Lake Of The Wood'),
('Le Sueur'),
('Lincoln'),
('Lyon'),
('Mahnomen'),
('Marshall'),
('Martin'),
('McLeod'),
('Meeker'),
('Mille Lacs'),
('Morrison'),
('Mower'),
('Murray'),
('Nicollet'),
('Nobles'),
('Norman'),
('Olmsted'),
('Otter Tail'),
('Pennington'),
('Pine'),
('Pipestone'),
('Polk'),
('Pope'),
('Ramsey'),
('Red Lake'),
('Redwood'),
('Renville'),
('Rice'),
('Rock'),
('Roseau'),
('St. Louis'),
('Scott'),
('Sherburne'),
('Sibley'),
('Stearns'),
('Steele'),
('Stevens'),
('Swift'),
('Todd'),
('Traverse'),
('Wabasha'),
('Wadena'),
('Waseca'),
('Washington'),
('Watonwan'),
('Wilkin'),
('Winona'),
('Wright'),
('Yellow Medicine'),
('St. Croix, WI'),
('Other');

CREATE TABLE "organizations" (
	"id" serial PRIMARY KEY,
	"org_name" varchar(255),
	"logo" varchar(255),
	"url" varchar(255),
	"type" varchar(255),
	"address_number" varchar(255),
	"address_street" varchar(255),
	"address_unit" varchar(255),
	"city" varchar(255),
	"state" varchar(255),
	"county_id" integer REFERENCES counties,
	"zip" varchar(255),
	"notes" varchar(255)
);

INSERT INTO "organizations" ("org_name", "logo", "url", "type", "address_number", "address_street", "address_unit", "city", "state", "county_id", "zip", "notes")
VALUES( '360 Communities','https://360communities.org/wp-content/uploads/2019/04/Menu-Logo-800.png', null, 'non-profit','501','State Hwy 13', '#112', 'Burnsville','MN','19','55337', NULL),
('800 Workforce Center', 'http://www.800westbroadway.org/sites/default/files/logo_0_0.jpg', null, 'non-profit','800','West Broadway', NULL, 'Minneapolis','MN','27','55411', NULL),
('Minnesota Childrens Museum', 'http://mcm.org/wp-content/uploads/2015/08/mcm-logo.png', null, 'municipal','10', '7th St. W', NULL, 'St. Paul','MN','62','55102', NULL),
('Gethsemane Lutheran Church', 'https://www.geth.org/wp-content/uploads/2019/05/gethsemane-logo.png', null, 'religious','2410','Stillwater RD E', NULL, 'Maplewood', 'MN', '62', '55119', NULL),
('City of Bloomington', 'https://www.bloomingtonmn.gov/sites/default/themes/cob_omega/logo.png', null,  'municipal', '1800', 'W Old Shakopee Rd', NULL, 'Bloomington', 'MN', '27', '55431', NULL),
('City of Brooklyn Center', NULL, null,  'municipal', '6301', 'Shingle Creek PKWY', NULL, 'Brooklyn Center', 'MN', '27', '55430', NULL),
('City of Burnsville', 'https://www.burnsville.org/ImageRepository/Document?documentID=18162', null,  'municipal', '12550', 'Nicollet Avenue', NULL, 'Burnsville', 'MN', '19', '55337', NULL),
('City of South St. Paul', 'https://www.southstpaul.org/ImageRepository/Document?documentID=3949', null, 'municipal', '125', '3rd Ave N', NULL, 'South St. Paul', 'MN', '19', '55075', NULL),
('Hazel Park Rec Center', NULL, null, 'municipal', '945', 'Hazel St. N', NULL, 'St. Paul', 'MN', '62', '55119', NULL),
('Closet of Hope', NULL, null, 'religious', '10150', 'Xerxes Ave S.', NULL, 'Bloomington', 'MN', '27', '55431', NULL),
('Little Free Library', 'https://littlefreelibrary.org/wp-content/uploads/2018/06/little-free-library-logo-nav.png', 'https://littlefreelibrary.org/', 'non-profit', '573', 'County Road A', 'Suite 106', 'Hudson', 'WI', '88', '54016', NULL),
('Western Service Center', NULL, null, 'municiapl', '14955', 'Galaxie Avenue', NULL, 'Apple Valley', 'MN', '19', '55124', NULL),
('Dakota City Heritage Village', 'http://www.dakotacity.org/wp-content/uploads/2015/03/DCHV.Logo1_.jpg', null, 'municipal', '4008', '220th ST', NULL, 'Farmington', 'MN', '19', '55024', NULL),
('Easter Lutheran Church', 'https://easter.org/wordpress/wp-content/uploads/2017/08/Easter_Logo_v2f-Notag-NEWWEB3-300x161.jpg', null, 'religious', '4200', 'Pilot Knob RD', NULL, 'Eagan', 'MN', '19', '55122', NULL),
('Community Education Burnsville', 'https://www.communityed191.org/thumbnails/www.communityed191.org/files/images/logo_0_auto_auto.png', null, 'municipal', '200', 'W Burnsville PKWY', 'Suite 100', 'Burnsville', 'MN', '19', '55337', NULL),
('City of St. Paul', 'https://lh3.googleusercontent.com/proxy/G_FMh0xWkHRVk0m19XVa-a7WwVefJp9ueuma5kLsb6M59AnXGlzcNNOknNreQZ1dyGdKKFaYPSsWxSt8jFvnkXPWWwdrDHMau6fDxn64Z5bFZ3mRmnIGo9Sv7pSu0z2F1WjLYgeefOe4kJj63uGwR_ZwSiRont2h_tSSXjrGJ2_3myuEehAwHSNAeQ', 'https://www.stpaul.gov/', 'Municipal', null, null, null, 'St. Paul', 'MN', '62', '55119', null),
('Gideon Pond Elementary', null, 'https://www.isd191.org/schools/gideon-pond-elementary', 'Public School', null, null, null, 'Burnsville', 'MN', '19', '55337', null),
('Sioux Trail Elementary', null, 'https://www.isd191.org/schools/sioux-trail-elementary', 'Public School', null, null, null, 'Burnsville', 'MN', '19', '55337', null),
('Neighborhood House', 'https://media.glassdoor.com/sqll/2108163/neighborhood-house-mn-squarelogo-1533238373274.png', 'http://neighb.org/', null, null, null, null, 'St. Paul', 'MN', '62', '55107', null),
('Northpoint Clinic', 'https://northsidefresh.org/wp-content/uploads/2019/10/northside-fresh_0011_northpoint-health-wellness-center-1.png', 'https://www.northpointhealth.org/', 'Clinic', null, null, null, 'Minneapolis', 'MN', '27', '55411', null),
('Urban Ventures', 'https://pbs.twimg.com/profile_images/932038490900099072/VDXezHNX_400x400.jpg', 'https://urbanventures.org/', 'Nonprofit', null, null, null, 'Minneapolis', 'MN', '27', '55408', null),
('American Red Cross', 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072011/americanredcross_logo-converted.png', 'https://www.redcross.org/local/minnesota.html', 'non-profit', '1201', 'W River PKWY', null, 'Minneapolis', 'MN', '27', '55454', null),
('Brooklyn Center Police', null, null, 'municipal', '6645', 'Humboldt Ave N', null, 'Brooklyn Center', 'MN', '27', '55430', null ),
('Bryn Mawr Presbyterian Church', null, null, 'religious', '420', 'Cedar Lake RD S', null, 'Minneapolis', 'MN', '27', '55405', 'St. Annes Place')

CREATE TABLE "contacts" (
	"id" serial PRIMARY KEY NOT NULL,
	"contact_name" varchar(255) NOT NULL,
	"title" varchar(255),
	"organizations_id" integer REFERENCES organizations,
	"phone_number" varchar(255),
	"phone_number_type" varchar(255),
	"email" varchar(255),
	"notes" varchar(255)
);

INSERT INTO "contacts" ("contact_name", "title", "organizations_id", "phone_number", "phone_number_type", "email", "notes")
VALUES ('Mycie Tew', null, 1, null, null, 'Mtew@360communities.org', null),
('PJ Doyle', 'volunteer', 22, '612-460-3668', null, 'PJ.Doyle@redcross.org', null),
('Carolyn Crook',  'Community Liaison', 23, null, null, 'ccrook@ci.brooklyn-center.mn.us', null),
('Paula Watkins', 'Church Representative', 24, null, null, 'mppwatkins@gmail.com', null),
('Emily Vang', null, 3, '651-225-6054', 'office', 'evang@mcm.org', null),
('Jaime Brother', null, 3, '651-225-6054', 'office', 'jbrother@mcm.org', null),
('Becky Sliva', 'Director of Children and Youth Ministries', 4, null, null, 'bsliva@geth.org', null),
('Jean Sanon', 'Community Outreach Coordinator', 5, null, null, 'jsanon@bloomingtonmn.gov', null),
('Ai Vang', 'Administrative Assistant', 6, '763-569-3470', 'office', 'avang@ci.brooklyn-center.mn.us', 'Earl Browne Days'),
('David Erdall', 'Recreation Programmer', 7, '952-895-4514', 'office', 'david.erdall@burnsville.mn.gov', 'Party on the Plaza'),
('Patricia Cooper', 'pcooper@sspps.org', 8, '651-306-3638', 'office', 'pcooper@sspps.org', 'Community Baby Shower'),
('Dawn Anderson', 'founder', 10, null, null, 'dawnanderson55@gmail.com', null),
('Brandon Pedersen', 'Operations', 11, '715-690-2488', 'office', 'bpedersen@littlefreelibrary.org', NULL ),
('Doreen Kennedy', 'President', 13, null, null, 'dorken@frontiernet.net', NULL),
('Becky Haage', null, 14, '651-424-4186', 'office', 'reachingupmin@gmail.com', null),
('Jorge Bardales', null, 19, null, null, 'jbardales@neighb.org', null),
('Sally Newbury', 'Volunteer Engagement Coordinator', 20, '651-767-0324', 'office', 'snewbury@npimn.org', null),
('Kendra Peterson', 'Director, Literacy', 21, '612-638-1000', 'office', 'kendrapeterson@urbanventures.org', null)