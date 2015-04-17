# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150417204044) do

  create_table "bubble_map", id: false, force: true do |t|
    t.integer "fiscal_year"
    t.string  "program_area_name"
    t.string  "organization_type"
    t.string  "award_status",      limit: 11
    t.integer "cnt_award_status",  limit: 8,   default: 0, null: false
    t.string  "state_code"
    t.string  "state_name",        limit: 200
  end

  create_table "history_dashboard", id: false, force: true do |t|
    t.integer "fiscal_year"
    t.string  "program_area_name"
    t.string  "program_name"
    t.integer "award_days"
    t.integer "cnt_proposals",     limit: 8,  default: 0, null: false
    t.string  "aging_type",        limit: 23
  end

  create_table "history_dashboards", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "nifa_proposal_data_18f", id: false, force: true do |t|
    t.string   "PROPOSAL_NUMBER"
    t.string   "STATUS"
    t.string   "AWARD_FISCAL_YEAR"
    t.string   "RECIPIENT_NAME"
    t.string   "RECIPIENT_STATE_NAME"
    t.string   "RECIPIENT_CITY_NAME"
    t.string   "RECIPIENT_COUNTRY_CODE"
    t.string   "RECIPIENT_ZIP_CODE"
    t.string   "RECIPIENT_ST_ADDR1"
    t.string   "RECIPIENT_ST_ADDR2"
    t.string   "ORGANIZATION_TYPE"
    t.string   "PROPOSED_PROJECT_DIRECTOR"
    t.string   "CFDA_NUMBER"
    t.string   "REQUESTED_AMOUNT"
    t.string   "AWARDED_AMOUNT"
    t.string   "TYPE_OF_AWARD"
    t.string   "PROPOSAL_TYPE"
    t.string   "AWARD_SPECIALIST_NAME"
    t.string   "AWARD_SPECIALIST_EMAIL"
    t.string   "PROGRAM_CODE"
    t.string   "PROGRAM_NAME"
    t.string   "PROGRAM_AREA_CODE"
    t.string   "PROGRAM_AREA_NAME"
    t.string   "PANEL_ID"
    t.string   "PANEL_NAME"
    t.datetime "FUNDING_OPPORTUNITY_BEGIN_DATE"
    t.datetime "FUNDING_OPPORTUNITY_END_DATE"
    t.datetime "GRANTS_GOV_SUBMIT_DATE"
    t.datetime "NIFA_LOAD_DATE"
    t.string   "PANEL_START_DATE"
    t.string   "PANEL_END_DATE"
    t.string   "AWARD_RECOMMENDATION_DATE"
    t.string   "AWARD_SPECIALIST_ASSIGN_DATE"
    t.string   "AWARD_DATE"
    t.string   "NIFA_PROJECT_NUMBER"
    t.string   "PROPOSAL_TITLE"
    t.string   "KEYWORDS"
  end

  create_table "proposals_view", id: false, force: true do |t|
    t.string  "PROPOSAL_NUMBER"
    t.string  "STATUS"
    t.integer "AWARD_FISCAL_YEAR",              limit: 8
    t.string  "RECIPIENT_NAME"
    t.string  "RECIPIENT_STATE_NAME"
    t.string  "RECIPIENT_CITY_NAME"
    t.string  "RECIPIENT_COUNTRY_CODE"
    t.string  "RECIPIENT_ZIP_CODE"
    t.string  "RECIPIENT_ST_ADDR1"
    t.string  "RECIPIENT_ST_ADDR2"
    t.string  "ORGANIZATION_TYPE"
    t.string  "PROPOSED_PROJECT_DIRECTOR"
    t.string  "CFDA_NUMBER"
    t.integer "REQUESTED_AMOUNT",               limit: 8
    t.integer "AWARDED_AMOUNT",                 limit: 8
    t.string  "TYPE_OF_AWARD"
    t.string  "PROPOSAL_TYPE"
    t.string  "AWARD_SPECIALIST_NAME"
    t.string  "AWARD_SPECIALIST_EMAIL"
    t.string  "PROGRAM_CODE"
    t.string  "PROGRAM_NAME"
    t.string  "PROGRAM_AREA_CODE"
    t.string  "PROGRAM_AREA_NAME"
    t.integer "PANEL_ID",                       limit: 8
    t.string  "PANEL_NAME"
    t.string  "FUNDING_OPPORTUNITY_BEGIN_DATE", limit: 10
    t.string  "FUNDING_OPPORTUNITY_END_DATE",   limit: 10
    t.string  "GRANTS_GOV_SUBMIT_DATE",         limit: 10
    t.string  "NIFA_LOAD_DATE",                 limit: 10
    t.string  "PANEL_START_DATE",               limit: 10
    t.string  "PANEL_END_DATE",                 limit: 10
    t.string  "AWARD_RECOMMENDATION_DATE",      limit: 10
    t.string  "AWARD_SPECIALIST_ASSIGN_DATE",   limit: 10
    t.string  "AWARD_DATE",                     limit: 10
    t.string  "NIFA_PROJECT_NUMBER"
    t.string  "PROPOSAL_TITLE"
    t.string  "KEYWORDS"
    t.binary  "deleted_at",                     limit: 0
  end

end
