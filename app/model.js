const mongoose = require('mongoose');

const BLSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  "BL ID": Number,
  "Job Id": Number,
  "MBL No": String,
  "MBL Date": Date,
  "House BL No": String,
  "HBL Date": Date,
  "BL No": String,
  "BL Date": Date,
  "MBL or HBL": String,
  "MBL ID": Number,
  "BL Issue Place": String,
  "BL Issue Date": Date,
  "BL Release Date": Date,
  "Mode of Transport": String,
  "Mode Code": String,
  "Mode of Transport ID": Number,
  "Container Status": String,
  "Container Status Code": String,
  "No of Packages": Number,
  "Gross Weight": Number,
  "Gross Weight Unit": String,
  "Net Weight": Number,
  "Nett Weight Unit": String,
  "Chargeable Weight": Number,
  "Volume": Number,
  "Volume Unit": String,
  "Package Code": String,
  "Package Description": String,
  "Package Type": String,
  "Country Wise Package Code": String,
  "Country Wise Package Description": String,
  "Goods Description": String,
  "Shipper ID": Number,
  "Shipper Name": String,
  "Shipper Branch": String,
  "Shipper Address": String,
  "Shipper CIN No": String,
  "Consignee ID": Number,
  "Consignee Name": String,
  "Consignee Branch": String,
  "Consignee Address": String,
  "Consignee CIN No": String,
  "Notify Party1 Name": String,
  "Notify Party1 Branch": String,
  "Notify Party1 Address": String,
  "Notify CIN No": String,
  "Notify Party2 Name": String,
  "Notify Party2 Branch": String,
  "Notify Party2 Address": String,
  "Notify Party3 Name": String,
  "Notify Party3 Branch": String,
  "Notify Party3 Address": String,
  "Delivery Agent ID": Number,
  "Delivery Agent Name": String,
  "Delivery Agent Branch Name": String,
  "Delivery Agent Address": String,
  "Load Port Agent ID": Number,
  "Load Port Agent Name": String,
  "Load Port Agent Address": String,
  "Load Port Custom Broker Name": String,
  "Shipping Line ID": Number,
  "Shipping Line": String,
  "Shipping line Address": String,
  "Shipping Line Code": String,
  "Shipping Line Agent": String,
  "Discharge Port Agent Name": String,
  "Nominated Area": String,
  "Direct Delivery": String,
  "DPD Direct Delivery": String,
  "Destination Custom Broker Name": String,
  "Broker Name": String,
  "Brokerage Percentage": Number,
  "PLR": String,
  "PLR Code": String,
  "POL": String,
  "POL Code": String,
  "POD": String,
  "POD Code": String,
  "FPD": String,
  "FPD Code": String,
  "PLR ID": Number,
  "POL ID": Number,
  "POD ID": Number,
  "FPD ID": Number,
  "Nominated Area ID": Number,
  "Marks and Nos": String,
  "Marks and Nos Actual": String,
  "BL Remarks": String,
  "No of BLs": Number,
  "Freight Prepaid At": String,
  "Marks and Nos and Container Details": String,
  "Container Details": String,
  "Country of Origin": String,
  "Country of Origin Code": String,
  "Shippers Reference No": String,
  "Consignee Reference No": String,
  "Vessel Voyage": String,
  "Vessel Flight Code": Number,
  "Vessel Flight Name": String,
  "Voyage No": String,
  "Vessel ID": Number,
  "Voyage ID": Number,
  "BL Clause": String,
  "Cargo Type": String,
  "BL Freight Prepaids_Collect": String,
  "Pre Carriage By": String,
  "IMO Code": String,
  "IMO Group": String,
  "UN No": String,
  "PG No": String,
  "Flash Point": String,
  "IMO Class": String,
  "Commodity": String,
  "Free Days at Origin": Number,
  "Destination Demurrage Free days": Number,
  "Free Days at Destination": Number,
  "Detention Currency": String,
  "Detention Rate": String,
  "Shipped Onboard Date": Date,
  "Flash Point Unit": String,
  "Own Company Name": String,
  "Own Company Address": String,
  "Own Branch Name": String,
  "Own Branch Code": String,
  "Shipment Type": String,
  "Stuffing - Destuffing Type": String,
  "Customs Reference No": String,
  "Customs Reference Date": Date,
  "HS Code": String,
  "Proper Shipping Name": String,
  "Service Type": String,
  "Item No": Number,
  "Sub Line No": String,
  "HBL Type Code": String,
  "HBL Type Desc": String,
  "HBL Type ID": Number,
  "IGM No": Number,
  "IGM Date": Date,
  "CHA Name": String,
  "Yard ID": Number,
  "Yard Code": String,
  "Yard Name": String,
  "Yard Address": String,
  "Berth Code": String,
  "Berth Name": String,
  "Arrival Date": Date,
  "Estimated Departure Date": Date,
  "Estimated Arrival Date": Date,
  "Company_ID": Number,
  "Company_Branch_ID": Number,
  "No of Containers": Number,
  "No of Teus": Number,
  "No of Feus": Number,
  "No of 20": Number,
  "No of 40": Number,
  "Voucher Credit Amount": Number,
  "Voucher Debit Amount": Number,
  "Sales Invoice Gross Amount": Number,
  "Sales Invoice Tax Amount": Number,
  "Purchase Invoice Gross Amount": Number,
  "Purchase Invoice Tax Amount": Number,
  "Vessel Sail Date": Date,
  "Vessel Arrival Date": Date,
  "Marks N Container": String,
  "bl_document_type": String,
  "BL Type": String,
  "Calculation Sheet No": String,
  "POD Agent Person": String,
  "Stuffing Date": Date,
  "JNPT Code": String,
  "GTI Code": String,
  "NSICT Code": String,
  "Slot Owner Code": String,
  "Slot Owner Name": String,
  "MLO ID": Number,
  "MLO Code": String,
  "MLO Name": String,
  "Import Vessel ID": Number,
  "Import Voyage ID": Number,
  "Import Vessel Name": String,
  "Import Vessel Code": Number,
  "Import Vessel Nationality": String,
  "Import Voyage No": String,
  "Agent Name": String,
  "Delivery Order No": {},
  "Delivery Order Date": Date,
  "Freight Payable At": String,
  "SOC": String,
  "Call Sign": String,
  "No of Packages In Words": String,
  "PRT PAYABLE AT": String,
  "NO_OF_CONTAINERS TEXT": String,
  "CONTPACK ": String,
  "cargo_type_desc": String,
  "No of BLs in Text": String,
  "Rotation No": String,
  "Rotation Date": Date,
  "Last Port": String,
  "Last Port Code": String,
  "Next Port": String,
  "Next Port Code": String,
  "Vessel Nationality": String,
  "Master": String,
  "Valid Date": Date,
  "Shipping Bill No": String,
  "Shipping Bill Date": Date,
  "Country of Discharge": String,
  "BL Status": String,
  "Multiple Container No": String,
  "Landing Date": Date,
  "BL Sr No": Number,
  "PLR Country": String,
  "FPD Country": String,
  "POD Agent": String,
  "POD Agent Address": String,
  "Forwarding Agent": String,
  "Forwarding Agent Address": String,
  "container_marks_attach_sheet": String,
  "attachment_remarks": String,
  "POL Agent Registration Code": String,
  "POD Agent Registration Code": String,
  "POL Line Registration Code": String,
  "POD Line registration Code": String,
  "POL Agent EDI Code": String,
  "POD Agent EDI Code": String,
  "Origin Airport Agent IATA Code": String,
  "Destination Airport Agent IATA Code": String,
  "Origin Airport Agent IATA Account No": String,
  "Destination Airport Agent IATA Account No": String,
  "Job Nos": String,
  "Container Nos": String,
  "Dimension Unit": String,
  "Dept BL Type": String,
  "Dept BL Category": String,
  "Dept BL Type Id": Number,
  "Dept BL Category Id": Number,
  "Page Code": String,
  "Total Tare Wt of Containers": Number,
  "No of package text": String,
  "BL Gross Weight KGS": Number,
  "BL Net Weight KGS": Number,
  "BL Release Type": String,
  "Nominated Area Code": String,
  "Own CFS": String,
  "is_deleted": Number,
  "Draft final": String,
  "Consignee Remarks": String,
  "Depot Name": String,
  "Depot Address": String,
  "Own CIN No": String,
  "New Consignee Name": String,
  "created_by_company_branch_id": Number,
  "Destuffing Type": String,
  "Conveyance": String,
  "Exchange Rate": Number,
  "Sector": String,
  "BL Flag": String,
  "Transit Time": String,
  "Landing Guarantee No": String,
  "Landing Guarantee Date": Date,
  "Import Landing Guarantee No": String,
  "Import Landing Guarantee Date": Date,
  "EDelivery": String,
  "Carrier": String,
  "Carrier Bond No": String,
  "Bond No": String,
  "Carrier Instruction": String,
  "ICD MOVE DATE": Date,
  "DPD Code": String,
  "DPD ID": Number,
  "DPD Desc": String,
  "Country Wise Container Status Code": String,
  "Country Wise Container Status Description": String,
  "Via No": String,
  "Import Via No": String,
  "Slot Owner Id": Number,
  "igm_remarks": String,
  "PLR NAME": String,
  "POL NAME": String,
  "POD NAME": String,
  "FPD NAME": String,
  "Transhipment Port": String,
  "Transhipment Port1": String,
  "Switch BL": String,
  "Switch Agent ID": Number,
  "Switch Agent": String,
  "Telephone No": String,
  "Fax No": String,
  "Size Type Pkg Details": String,
  "Delivery Agent Branch": String,
  "POL Agent Branch": String,
  "parent_bl_id": Number,
  "Transhipment Port Id": Number,
  "Transhipment Port1 Id": Number,
  "Notify Party1 Id": Number,
  "BL Of Id": Number,
  "BL Of": String,
  "Shipper Branch Id": Number,
  "Consignee Branch Id": Number,
  "Notify Party1 Branch Id": Number,
  "POL Agent Branch Name": String,
  "Next Port ETA": Date,
  "Commodity Type": String,
  "Route Type Code": String,
  "Route Type": String,
  "PLR Agent Id": Number,
  "PLR Agent Name": String,
  "PLR Agent Branch Id": Number,
  "PLR Agent Branch": String,
  "Chargeable Weight Unit": String,
  "POD HS Code": String,
  "Third CFS ID": Number,
  "Third CFS Desc": String,
  "Third CFS Code": String,
  "container_plan": Number
});

const BLModel = mongoose.model('BL', BLSchema, 'tblBL');

module.exports = BLModel;
