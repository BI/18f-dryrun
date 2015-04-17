CREATE or replace VIEW `proposals_view`
AS
   SELECT `nifa_proposal_data_18f`.`PROPOSAL_NUMBER`
             AS `PROPOSAL_NUMBER`,
          `nifa_proposal_data_18f`.`STATUS` AS `STATUS`,
          cast(replace(`nifa_proposal_data_18f`.`AWARD_FISCAL_YEAR`,',','') as SIGNED)         
             AS `AWARD_FISCAL_YEAR`,
          `nifa_proposal_data_18f`.`RECIPIENT_NAME`
             AS `RECIPIENT_NAME`,
          `nifa_proposal_data_18f`.`RECIPIENT_STATE_NAME`
             AS `RECIPIENT_STATE_NAME`,
          `nifa_proposal_data_18f`.`RECIPIENT_CITY_NAME`
             AS `RECIPIENT_CITY_NAME`,
          `nifa_proposal_data_18f`.`RECIPIENT_COUNTRY_CODE`
             AS `RECIPIENT_COUNTRY_CODE`,
          `nifa_proposal_data_18f`.`RECIPIENT_ZIP_CODE`
             AS `RECIPIENT_ZIP_CODE`,
          `nifa_proposal_data_18f`.`RECIPIENT_ST_ADDR1`
             AS `RECIPIENT_ST_ADDR1`,
          `nifa_proposal_data_18f`.`RECIPIENT_ST_ADDR2`
             AS `RECIPIENT_ST_ADDR2`,
          `nifa_proposal_data_18f`.`ORGANIZATION_TYPE`
             AS `ORGANIZATION_TYPE`,
          `nifa_proposal_data_18f`.`PROPOSED_PROJECT_DIRECTOR`
             AS `PROPOSED_PROJECT_DIRECTOR`,
          `nifa_proposal_data_18f`.`CFDA_NUMBER`
             AS `CFDA_NUMBER`,
          cast(replace(`nifa_proposal_data_18f`.`REQUESTED_AMOUNT`,',','') as SIGNED)
             AS `REQUESTED_AMOUNT`,
          cast(replace(`nifa_proposal_data_18f`.`AWARDED_AMOUNT`,',','') as SIGNED)
             AS `AWARDED_AMOUNT`,
          `nifa_proposal_data_18f`.`TYPE_OF_AWARD`
             AS `TYPE_OF_AWARD`,
          `nifa_proposal_data_18f`.`PROPOSAL_TYPE`
             AS `PROPOSAL_TYPE`,
          `nifa_proposal_data_18f`.`AWARD_SPECIALIST_NAME`
             AS `AWARD_SPECIALIST_NAME`,
          `nifa_proposal_data_18f`.`AWARD_SPECIALIST_EMAIL`
             AS `AWARD_SPECIALIST_EMAIL`,
          `nifa_proposal_data_18f`.`PROGRAM_CODE`
             AS `PROGRAM_CODE`,
          `nifa_proposal_data_18f`.`PROGRAM_NAME`
             AS `PROGRAM_NAME`,
          `nifa_proposal_data_18f`.`PROGRAM_AREA_CODE`
             AS `PROGRAM_AREA_CODE`,
          `nifa_proposal_data_18f`.`PROGRAM_AREA_NAME`
             AS `PROGRAM_AREA_NAME`,
          cast(replace(`nifa_proposal_data_18f`.`PANEL_ID`,',','') as SIGNED)
             AS `PANEL_ID`,
          `nifa_proposal_data_18f`.`PANEL_NAME`
             AS `PANEL_NAME`,
          date_format(FUNDING_OPPORTUNITY_BEGIN_DATE,'%Y-%m-%d')
             AS `FUNDING_OPPORTUNITY_BEGIN_DATE`,
          date_format(FUNDING_OPPORTUNITY_END_DATE,'%Y-%m-%d')
             AS `FUNDING_OPPORTUNITY_END_DATE`,
          date_format(GRANTS_GOV_SUBMIT_DATE,'%Y-%m-%d')
             AS `GRANTS_GOV_SUBMIT_DATE`,
          date_format(NIFA_LOAD_DATE,'%Y-%m-%d')
             AS `NIFA_LOAD_DATE`,
          date_format(`nifa_proposal_data_18f`.`PANEL_START_DATE`,'%Y-%m-%d')
             AS `PANEL_START_DATE`,
          date_format(`nifa_proposal_data_18f`.`PANEL_END_DATE`,'%Y-%m-%d')
             AS `PANEL_END_DATE`,
          date_format(`nifa_proposal_data_18f`.`AWARD_RECOMMENDATION_DATE`,'%Y-%m-%d')
             AS `AWARD_RECOMMENDATION_DATE`,
          date_format(`nifa_proposal_data_18f`.`AWARD_SPECIALIST_ASSIGN_DATE`,'%Y-%m-%d')
             AS `AWARD_SPECIALIST_ASSIGN_DATE`,
          date_format(`nifa_proposal_data_18f`.`AWARD_DATE`,'%Y-%m-%d')
             AS `AWARD_DATE`,
          `nifa_proposal_data_18f`.`NIFA_PROJECT_NUMBER`
             AS `NIFA_PROJECT_NUMBER`,
          `nifa_proposal_data_18f`.`PROPOSAL_TITLE`
             AS `PROPOSAL_TITLE`,
          `nifa_proposal_data_18f`.`KEYWORDS`
             AS `KEYWORDS`,
           case extract(MONTH from `nifa_proposal_data_18f`.GRANTS_GOV_SUBMIT_DATE)
            when 10 then
                extract(YEAR from `nifa_proposal_data_18f`.GRANTS_GOV_SUBMIT_DATE) + 1
            when 11 then
                extract(YEAR from `nifa_proposal_data_18f`.GRANTS_GOV_SUBMIT_DATE) + 1
            when 12 then
                extract(YEAR from `nifa_proposal_data_18f`.GRANTS_GOV_SUBMIT_DATE) + 1
            else
                extract(YEAR from `nifa_proposal_data_18f`.GRANTS_GOV_SUBMIT_DATE)
            end Fiscal_Year,
           null as deleted_at
     FROM `nifa_proposal_data_18f`;